package main

import (
	"log"
	"nihal-innsof/portfolio/internal/server"
	"os"
	"strconv"
)

func main() {
	logger := log.New(os.Stdout, "[Portfolio-App] ", log.LstdFlags)

	port := 8080
	if envPort := os.Getenv("PORT"); envPort != "" {
		if p, err := strconv.Atoi(envPort); err == nil {
			port = p
		}
	}

	srvr, err := server.NewServer(logger, port)
	if err != nil {
		logger.Fatalf("Error creating server: %v", err)
		os.Exit(1)
	}
	if err := srvr.Start(); err != nil {
		logger.Fatalf("Error starting server: %v", err)
		os.Exit(1)
	}
}
