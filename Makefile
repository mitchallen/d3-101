# Variables
PROJECT_DIR := $(shell pwd)
NODE_MODULES := $(PROJECT_DIR)/node_modules
INDEX_HTML := $(PROJECT_DIR)/index.html

# Default target
all: install serve

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

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
run: install serve open

.PHONY: all install serve open clean run
