package handlers

import (
	"backend/pkg/cache"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
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

	if len(files) == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "No slides found"})
		return
	}

	var slideFiles []os.DirEntry
	for _, file := range files {
		if !file.IsDir() {
			slideFiles = append(slideFiles, file)
		}
	}

	action := c.Query("action")
	indexStr := c.Query("index")
	index, err := strconv.Atoi(indexStr)
	if err != nil || index < 0 || index >= len(slideFiles) {
		index = 0
	}

	switch action {
	case "next":
		index = (index + 1) % len(slideFiles)
	case "prev":
		index = (index - 1 + len(slideFiles)) % len(slideFiles)
	}

	file := slideFiles[index]
	slidePath := filepath.Join(directory, file.Name())
	_, found := cache.GetCache(slidePath)
	if !found {
		imageData, err := loadImageFromFile(slidePath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not load image"})
			return
		}
		cache.SetCache(slidePath, imageData)
	}

	slideURL := filepath.Join("/images/slider_photos", file.Name())
	slide := Slide{URL: slideURL}

	c.JSON(http.StatusOK, gin.H{"slide": slide, "index": index})
}

func loadImageFromFile(imagePath string) ([]byte, error) {
	imageData, err := os.ReadFile(imagePath)
	if err != nil {
		return nil, err
	}
	return imageData, nil
}
