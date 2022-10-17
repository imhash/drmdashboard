This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-configuration
Create and Populate appropriate variables.<br />

For Demo Purpose, import DR_DEMO_VARIABLES.xml, sample variables to Automic Process Assembly. <br />

Populate the VARA sheet with correct values.<br />

## Available Scripts

In the project directory, you can run:

### `npm install`

To Install npm and its dependencies<br />

### `Configure Dashboard`

Open config/DefaulSetting.js <br />

base_url: 'http://localhost:8088/ae/api/v1' - Base URL for RestEndpoint. <br />
client: Provide the DR Client Number. <br />
authorization: Basic Authorization Header of Username and Password<br />
application_list: Automic VARA object which defines theapplication list. <br />

### `npm start`

To bring up DR Dashboard  

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
