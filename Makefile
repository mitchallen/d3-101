# Variables
PROJECT_DIR := $(shell pwd)
NODE_MODULES := $(PROJECT_DIR)/node_modules
INDEX_HTML := $(PROJECT_DIR)/index.html

# Default target
all: run

# Start a simple HTTP server
serve:
	@echo "Starting HTTP server..."
	npx http-server -c-1 -p 8080

# Open the project in the default web browser
open:
	@echo "Opening project in the default web browser..."
	open http://localhost:8080

# Clean node_modules
clean:
	@echo "Cleaning up..."
	rm -rf $(NODE_MODULES)

# Run everything
# Open first so don't need other thread - will refresh automatically
run: open serve

.PHONY: all
