package main

import (
	"backend/pkg/loader"
	"backend/pkg/server"
	"log/slog"
)

func main() {
	r := server.SetupRouter()

	config, err := loader.LoadConfig()
	if err != nil {
		slog.Error("Failed to load config", err)
	}

	err = server.StartServer(r, config.GinPort)
	if err != nil {
		slog.Error("Failed to start server", err)
	}
}
