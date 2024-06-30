package server

import (
	"backend/pkg/handlers"
	"fmt"
	"github.com/gin-gonic/gin"
	"log/slog"
	"net/http"
	"os"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.Use(corsMiddleware)

	r.GET("/nj_api/images/:directory/:imageName", handlers.GetImage)

	return r
}

func corsMiddleware(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", os.Getenv("CORS_ORIGIN"))
	c.Header("Access-Control-Allow-Methods", "GET")
	c.Header("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(http.StatusNoContent)
		return
	}

	c.Next()
}

func StartServer(r *gin.Engine, port string) error {
	slog.Info("Starting server on port " + port)
	return r.Run(fmt.Sprintf(":%s", port))
}
