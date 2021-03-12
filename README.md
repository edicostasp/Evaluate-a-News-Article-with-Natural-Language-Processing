# Evaluate-a-News-Article-with-Natural-Language-Processing
This project aims to build a web tool that allows users to run a Natural Language Processing(NLP) on articles or blogs found on other websites and see the API analisys. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* Meaningcloud API
* Jest
* Workbox
## Goal of this project:
* Practice:
    * Setting up Webpack
    * Sass styles
    * Webpack Loaders and Plugins
    * Creating layouts and page design
    * Service workers
    * Using APIs and creating requests to external URLs

## Installation
Make sure Node and npm are installed from the terminal.
````
node -v
npm -v
````

1. Go to the project folder
````
cd <project directory>
````
2. Clone the repository
````
git clone <repo>
````
3. Install npm
````
npm install
````
4. Install loaders and plugins
````
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
````
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install the dotenv package
	````
	npm install dotenv
	````
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	````
	API_KEY=**************************
	````
7. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

8. Open browser at http://localhost:8081/
## How to use it:
1. Input a valid URL in the field "Enter the URL";
1. Click on the "Submit" button;
1. Results are presented in the "Results:" area.
