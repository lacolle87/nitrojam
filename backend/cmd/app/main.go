package main

import (
	"backend/pkg/handlers"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	corsMiddleware := func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Header("Access-Control-Allow-Methods", "GET")
		c.Header("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}

	r.Use(corsMiddleware)

	r.GET("/api/images/:directory/:imageName", handlers.GetImage)

	// Start the server
	r.Run(":8090")
}
