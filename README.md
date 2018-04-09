# Login Logout App
Created Using AngularJS and Bootstrap4.
Login Logout is a test app, created as part of assessment for ION Group. Please try following username and password to use the application -:

```
username - **admin**
password - **admin**
```
This app consist of three views -:

* **Welcome Screen** - That displays a banner and a button to **Get Started** (may lead to login page, if not logged in or home page directly)
* **Login Screen** - Displays a login form, consisting of two input fields, **Username** and **Password**, a **Submit** button and a **Cancel** button. When authentication with API is in progress, the login form will be disabled and a loader inside **Submit** button will be displayed.
* **Home Screen** - Displays logged in user's name and a button to Log out from the application. Upon logout, user will be redirected to Welcome Screen.

## Quickstart

The instructions to run the application.

### Prerequisites

Please install following before running the application

* [NodeJS](https://nodejs.org/en/) first to be able to use application.
* [Grunt](https://gruntjs.com/)
```
npm install grunt-cli -g
```
* [Bower](https://bower.io/) 
```
npm install bower -g
```
### Installing

#### APIs
Please go into the **api** folder and run following commands -:
```
npm install
node index.js
```
API server should be running on port 13000. If need to change the port, please edit the index.js

#### UI
Please go into **ui** folder and run following commands -:
```
npm install
bower install
grunt serve
```
A static server should be running on port 9000.
Now you can open the Welcome screen at following URL -:
[http://localhost:9000/index.html#!/](http://localhost:9000/index.html#!/)

## Authors
* [**Sukhdeep Singh**](https://www.linkedin.com/in/sukhdeep-singh-handa-b9712844/)

## Release Notes
* Version 1.0.0 - Initial App   

