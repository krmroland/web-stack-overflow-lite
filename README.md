# Stack overflow lite web
This repository contains the `UI` for the [`Stack overflow lite API`](https://github.com/krmroland/stackoverflow-lite-ui) 

#### Demo
A working demo is hosted [here](https://krmroland.github.io/stackoverflow-lite-ui/)

![demo image](demo.gif "Demo")

##### Features
- Users can create an account and log in.
- Users can post questions.
- Users can delete the questions they post.
- Users can post answers.
- Users can view the answers to questions.
- Users can search for questions on the platform
- Users can view the answers to questions.

#### Developer Notes

Local development uses the following tools;
- [Handlebars](https://handlebarsjs.com/) templates for code modularity and re-usability which are then compiled down to plain html
- [Sass](https://sass-lang.com/)  a CSS preprocessor, which adds special features such as variables, nested rules and mixins that makes CSS development enjoyable
- [webpack](https://webpack.js.org/) for module bundling and  with the help of [loaders](https://webpack.js.org/loaders/) , it is able to process do the following;
    - Compile **Sass** to **CSS**
    - Compile Handlebar templates **(.hbs)** to **html**
    - Trans-pile **Es6** Javascript to **ES5**
    - Remove **Unused css selectors**  from final build keeping the bundle size minimal
    - Live reloading, with [browser-sync](https://browsersync.io/) that makes local development enjoyable
    - Prettify the generated html before it is saved
    - Uglify and minimize both **CSS** and **JavaScript** in production to reduce bundle sizes
 
 
 _Do not make any changes in  the  `UI/dist` folders since the directory will be cleaned on every application build_



#### Requirements
Ensure that you have the following tools available locally on your machine

-   [Node js](https://nodejs.org/en/), a JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [A package manager](https://en.wikipedia.org/wiki/Package_manager) ([npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/)) for installing  **webpack** and its dependencies
-   [Git](https://git-scm.com/) , a Version Control System

#### Setup
- Clone the repo locally to your machine by running `git clone https://github.com/krmroland/web-stack-overflow-lite.git`

#### Install Dependencies
While still in the terminal run `npm install` or  `yarn` depending on which package manager you have installed .

#### Building the UI templates
While in the terminal in the `UI` directory
 1. `npm run build` or `yarn run production ` to compile `.hbs` ,`css`,`js`, and images
 2. `npm run production` or `yarn run production` to compile `.hbs`  ,`css`,`js`,`images` and minify them
 3. `npm run watch` or `yarn run watch` to set up a local development server and watch all the files for changes and live reload