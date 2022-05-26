.PHONY: all
all: run

.PHONY: run
run: build
	node dist/index.js

.PHONY: build
build:
	tsc

.PHONY: clean
clean:
	rm -rf dist
