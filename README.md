# Evaluate-a-News-Article-with-Natural-Language-Processing
This project aims to build a web tool that allows users to run a Natural Language Processing(NLP) on articles or blogs found on other websites and see the API analisys. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS
* Node
* Express
* JavaScript
* Meaningcloud API
* Webpack
* Workbox
* Jest
## Goal of this Web project:

* Practice:
    * Setting up Webpack
    * Webpack Loaders and Plugins
    * Sass styles
    * Using APIs and creating requests to external URLs
    * Creating layouts and page design
    * Service workers

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
npm i -D mini-css-extract-plugin
npm i -D html-webpack-plugin
npm i -D clean-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
````
5. Sign up for the API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install dotenv package properly
	````
	npm install dotenv
	````
	2. Create a new `.env` file in the root of the project
	3. Fill the `.env` file with your API key as shown:
	````
	API_KEY=**************************
	````
7. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build the project
`npm start` | Run the project

8. Open browser at http://localhost:8081/
## How to use it:
1. Insert a valid URL in "Enter the URL";
1. Click on the "Submit" button;
1. Results are shown in the "Results:" area.
