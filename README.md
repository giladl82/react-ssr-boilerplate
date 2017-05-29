# React Server Side Render Boilerplate


I've started up trying to build my own boilerplate for a React project with server side rendering, and ended up with stuffing every library I found interesting / wanted to try implementing, into this project.

Still I think this project can be a nice boilerplate for any React.

I didn't want to use any of the creators out there, because I wanted to learn how to implement it by myself.


## This project include


### Client Side:
* React
* Redux
* React Intl
* React Modal
* React Router V4
* Redux Form
* Axios

### Server Side:
* Express
* EJS

I'm using webpack, to build the project

### To Start with this project
 
* Clone it from this repo
* Install the dependencies

```
npm install
```

```
yarn add
```

* Run any of the available commands
	* build:client - Runs webpack for the client side with watch
	* build:server - Runs webpack for the server side with watch
	* start - Runs nodemon using the bundeled server file
	* build:all - Runs build:client + build:server
	* start:all - Runs build:client + build:server + start



### Nice to have

In the webpack.base.config file, there is a plugin in require commented ('webpack-bundle-analyzer').
This plugin, output a visual report of your bundle structrue.
Try it out when you are done coding your project (I might set it in the future, before build for production).
 make it fit in URLs
 
 ### Known issues

* When setting Router, NavLink, 'activeClassName' property to other then an empty string, it throw an error (server and client are different)
 