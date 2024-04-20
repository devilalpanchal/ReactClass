# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### All Commands
# All commands to run in terminals
### 01 mkdir foldername, to create folder
### 02 mkdir src, to create folder in first folder
### 03 echo > index.js, to create file
### 04 echo > app.js, to create file in src folder
### 05 mkdir public, folder create
### 06 echo > index.html ,to create file in public folder
### 07 write something in your file to run and also export and import
### 08 cd mainFolderName and leave form folder cd ..
### 09 npm init , enter and write descripotion and authour name and enter
### 10 npm install react
### 11 npm install react-dom
### 12 code . , open in vs code

## then install dependencies webpak OR babel
### 13 npm install -D webpack
### 14 npm install -D webpack-cli
### 15 npm install -D webpack-dev-server

## then 
### 16  make in main directory webpack.config.js file and add cod
 
 "

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
  },
  mode: 'development',

  module :{
    rules: [
      {
        "test":"/\.(js|jsx)$/",
        "exclude": "/node_modules/",
        "use": {
            "loader": "babel-loader"
        }
      }
    ]
    
  }
}



"
### 17 after then chnge in script file  'start: npx webpack server' from woluld be create dist file and then delete dist file 
### 18 npm start

## then we need to install babel dependencies 
### 19 npm install --seva-dev babel-loader
### 20 npm install --seva-dev @babel/preset-env
### 21 npm install --seva-dev @babel/preset-react
### 22 npm install --seva-dev @babel/core
### 23 we need to create a babel.rc in main directory and add code
"
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
};
"
### 24 after then chnge in script file  'dev: npx webpack server'
### 25 npm run dev
### it is compeleted React app instalation

# this is the correct way the instalation of react app in belove
### 01 npx create-react-app folderName , to create reactapp and also folder
### 02 cd folder name
### 03 npm start

### you can edite file as you your needed













