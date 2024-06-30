package main

import (
	"backend/pkg/loader"
	"backend/pkg/server"
	"github.com/gin-gonic/gin"
	"log/slog"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	config, err := loader.LoadConfig()
	if err != nil {
		slog.Error("Failed to load config", err)
	}

	r := server.SetupRouter()

	err = server.StartServer(r, config.GinPort)
	if err != nil {
		slog.Error("Failed to start server", err)
	}
}
