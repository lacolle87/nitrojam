package loader

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gopkg.in/natefinch/lumberjack.v2"
	"io"
	"log/slog"
	"os"
)

type Config struct {
	GinPort string
}

func LoadConfig() (*Config, error) {
	if err := godotenv.Load(".env"); err != nil {
		return nil, err
	}

	fileName := os.Getenv("LOG_FILE")
	LoadLogger(fileName)

	return &Config{
		GinPort: os.Getenv("GIN_PORT"),
	}, nil
}

func LoadLogger(fileName string) {
	logFile := &lumberjack.Logger{
		Filename:   fileName, // Specify your desired log file name
		MaxSize:    10,       // Max size in megabytes before rotation
		MaxBackups: 3,        // Number of old log files to keep
		MaxAge:     7,        // Max days to retain old log files
		Compress:   true,     // Compress rotated log files
	}

	multiWriter := io.MultiWriter(os.Stdout, logFile)
	logger := slog.New(slog.NewTextHandler(multiWriter, nil))

	slog.SetDefault(logger)

	gin.DefaultWriter = multiWriter
}
