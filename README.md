# MERN + Redux Login Template

## Getting Started

Be sure and fork the repository to your machine. Once forked, you will need to go to Mongo Atlas and and create an account.
Create a new cluster and whitlist your IP (0.0.0.0). To conclude, choose node.js and choose version **2.2.12 or later** from the dropdown.
Copy and Paste the key into the following format in a new file called **keys.js** inside of the **config** folder. 

`module.exports = {
    mongodbURI: 'place the copy of the key within these qoutes, be sure and change the <password> to your password you set up for the cluster',
    secretOrKey: 'secret'
  }`
  
Run the following command to get all dependencies:
  
`npm install`

Finally, to start the application run:

`npm run dev`

This will run both the react client server as well as the express server in the backend useing an npm package called **concurrently**.


## Contents

This template containes a React Redux frontend with a Node.js Backend with MongoDB as the database.
NOTE: This template is good for using a rails server as well. You will just have to create a `rails new` and set up the application with the correct schema that matches the models in this version.
If you change the server where the backend is running you must change the `proxy: http://localhost:3001` to whatever your backend endpoint is running on.
You can find all the routes to the backend in the *src/client/src/actions/authActions.js** file.

The authentication is using **jwt token authentication** and is using [**passport**](http://www.passportjs.org/) and [**is-empty**](https://www.npmjs.com/package/is-empty) to handle validations and authentication. 

## Interesting Notes

Becuse Redux does not run natively in browsers or mobile devices the `compose()` functoin within store has been modified with `composeWithDevTools()` so the redux browser extension is not neccessary to run this. Just be aware if you start to create another redux application from scratch that it will need this replacement or the [**redux-devtools-extension** npm packacge](https://www.npmjs.com/package/redux-devtools-extension)


This tempalte was made with ❤ by Patrick Kennedy | [Portfolio Website](https://pkennedytx1.com)
