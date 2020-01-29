# WEBDRIVER.IO PROJECT BY EDUARDO CARDENAS

This project was made as a demonstration of how to build an automation framework.

The Web been tested is `https://www.aliexpress.com/`.

## Use case

- As a Customer we want to see if the second Iphone related ad from the second results page from www.aliexpress.com has at least 1 item to be bought.

## Techonologies used

- NodeJS
- WebdriverIO
- Selenium
- Docker

## How to run test

Need to have the .env file shared via email. This file contains credentials for login.

### Steps

Install framework dependencies

```bash
npm install
```

Then run the tests in the docker mode (is mandatory to have docker already installed)

```bash
node_modules/.bin/wdio wdio.conf.js
```

### Results

Results are displayed on terminal screen at the end.
