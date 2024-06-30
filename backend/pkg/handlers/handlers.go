package handlers

import (
	"backend/pkg/cache"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"path/filepath"
)

type Slide struct {
	URL string `json:"url"`
}

func GetImage(c *gin.Context) {
	directory := c.Param("directory")
	imageName := c.Param("imageName")
	imagePath := filepath.Join("./images/", directory, imageName)

	cachedData, found := cache.GetCache(imagePath)
	if !found {
		imageData, err := loadImageFromFile(imagePath)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Image not found"})
			return
		}

		cache.SetCache(imagePath, imageData)

		cachedData = imageData
	}

	c.Header("Cache-Control", "public, max-age=3600")

	c.Data(http.StatusOK, "image/jpeg", cachedData)
}

func GetSlides(c *gin.Context) {
	directory := "./images/slider_photos/"
	files, err := os.ReadDir(directory)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not read slides directory"})
		return
	}

	var slides []Slide
	for _, file := range files {
		if !file.IsDir() {
			slidePath := filepath.Join(directory, file.Name())
			_, found := cache.GetCache(slidePath)
			if !found {
				imageData, err := loadImageFromFile(slidePath)
				if err != nil {
					continue // skip this file if it cannot be read
				}
				cache.SetCache(slidePath, imageData)
			}

			slideURL := filepath.Join("/images/slider_photos", file.Name())
			slides = append(slides, Slide{URL: slideURL})
		}
	}

	c.JSON(http.StatusOK, slides)
}

func loadImageFromFile(imagePath string) ([]byte, error) {
	imageData, err := os.ReadFile(imagePath)
	if err != nil {
		return nil, err
	}
	return imageData, nil
}
