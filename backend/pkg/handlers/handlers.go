package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"path/filepath"
)

func GetImage(c *gin.Context) {
	directory := c.Param("directory")
	imageName := c.Param("imageName")
	imagePath := filepath.Join("./images/", directory, imageName)

	_, err := filepath.Abs(imagePath)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Image not found"})
		return
	}

	c.File(imagePath)
}
