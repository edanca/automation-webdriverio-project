help: ## Displays available commands and it's notations
	@awk -F ':|##' \
	'/^[^\t].+?:.*?##/ {\
		printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST) | sort

linter: ## Run JSHint on the corrunt path
	node_modules/.bin/jshint --exclude="node_modules/" .

install: ## Installs NPM dependencies
	npm install

test: ## Run WebdriverIO tests
	@node_modules/.bin/wdio wdio.conf.js

.PHONY: install linter test