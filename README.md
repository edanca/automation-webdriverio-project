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


### See test running in action

For see how the test are executed, first you need to install VNC Viewer or any other remote server viewer.

Then you need to create a new connection pointing to `localhost:5900`, generally the default user in these applications are `admin` and the password `secret`.

IMPORTANT: Notice that the docker container will only be live while the tests are running, which is around 50 sec, after that the container is deleted.

 After completed the above steps, open a connection in your remote server viewer and see the tests running.
 
 *BE CAUTION* to do not interact with the browser inside the container, otherwise you could interrupt the test and make it fail.
 