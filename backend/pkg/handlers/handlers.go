package handlers

import (
	"backend/pkg/cache"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"path/filepath"
)

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

	c.Data(http.StatusOK, "image/jpeg", cachedData)
}

func loadImageFromFile(imagePath string) ([]byte, error) {
	imageData, err := os.ReadFile(imagePath)
	if err != nil {
		return nil, err
	}
	return imageData, nil
}
