package main

import (
	"backend/pkg/handlers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Custom CORS Middleware adjusted to allow specific origin
	corsMiddleware := func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:3000") // Specify allowed origin
		c.Header("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		c.Header("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		// Handle preflight requests
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}

	// Apply CORS middleware to all routes
	r.Use(corsMiddleware)

	// Route for serving images
	r.GET("/api/images/:directory/:imageName", handlers.GetImage)

	// Start the server
	r.Run(":8090")
}
