package server

import (
	"backend/pkg/handlers"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	gin.SetMode(gin.ReleaseMode)

	r.Use(corsMiddleware)

	r.GET("/api/images/:directory/:imageName", handlers.GetImage)

	return r
}

func corsMiddleware(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "http://127.0.0.1:9000")
	c.Header("Access-Control-Allow-Methods", "GET")
	c.Header("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(http.StatusNoContent)
		return
	}

	c.Next()
}

func StartServer(r *gin.Engine, port string) error {
	return r.Run(fmt.Sprintf(":%s", port))
}
