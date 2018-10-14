# front-end-template

Front-end-template, for starting a project without library or framework.

## Why should I use this template.
  
 ### Professional folder structure:
    src - Developer working files. This is there you write code.
    temp - Browser load this files. Multiple src files are automaticly transferred to one temp file. To cut down on requests.
    docs - Optimized website ready for deployment to live server. This is final product.
  
 ### Configured Gulp
  It allows you to work on server that updates automatically without the need of refreshing the page.
  Updating POSTCSS injects your code into a browser without refreshing it.
  
 ### Configured POSTCSS
  Allows you to have multiple files, nest your POSTCSS, create variables, mixins, 
 
 ### Configured Babel
  Allows you to write modern javascript on multiple files without the worry of browser support.
  
  ### Creates Optimized website
  Prepares files for distribution. For more info check deployment tab.
  
  
  
  It has installed:
  GULP - that updates your browser every time you save your project.
  BABEL - Configured babel that allows you to write modern javascript without the fear of browser support.
  WEBPACK - Allows you to bundle multiple javascript files instead of having one
  POSTCSS - Allows you to style 

* [BABEL](https://github.com/babel/babel) - For writing modern javascript.
* [WEBPACK](https://github.com/webpack/webpack) - For bundling javascript files.
* [JQUERY](https://github.com/jquery/jquery) - Javascript library.
* [POSTCSS](https://github.com/postcss/postcss) - For styling files.
* [GULP](https://github.com/gulpjs/gulp) - For automating browser.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

What things you need to install the software and how to install them

```
Node.js from Node.js website. For npm packages.
```

## Installing

A step by step series of examples that tell you how to get a development env running

1.In the project you want to use this template download this template.

2.Because this is a template for projects and not the actual project you need to manually copy all dependacies and dev dependacies and put it into your own project packgage json.

3.To create your own project json in command prompt type:

```
npm init
```
4.After that paste all the dependacies into json file after directories.

5.Open command prompt in project root folder and type:
```
npm install
```
6. Install gulp globally
```
npm install --global gulp-cli
```

To deploy server for editing with gulp enabled:
```
gulp watch
```
## Testing
### Updating versions
```
1.Create new branch
2.Add ^ to all package.json files.
3.Write npm install in command prompt or gitbash
4.Check what was updated.
5.Test the item that was updated.
```

## Icons

IMPORTANT all svg files must be placed in app\assets\images\icons folder.
To combine all svg files into one write:

```
gulp icons
```

Combines icons files appear at:

```
app\assets\images\sprites\sprite-e79e95cc.svg
```
Please note there is also a backup png sprites to support older browsers.
To use your icon in the project:

add class into div from:
```
app\assets\styles\modules\_sprite.css
```
Example For a facebook icon.
```
 <div class = "icon icon--facebook"></div>
```
## Deployment

To deploy on live system you need to bundle all files together. You can do this in git bash writing:

```
gulp build
```
To preview your build project write in git bash

```
gulp previewdist
```
# Changing deployed folder name from docs to your choosing.

Sometimes you need to change your distribution folder name, to change it,
modify these lines name "docs" to name you want to have.

gulp\tasks\build.js
```
14 line (baseDir: "docs"),
20 line (return del('./docs')),
36 line (.pipe(gulp.dest("./docs"));)
48 line .pipe(gulp.dest('./docs/assets/images'));
61 line .pipe(gulp.dest("./docs"));
```

## Built With

* [BABEL](https://github.com/babel/babel) - For writing modern javascript.
* [WEBPACK](https://github.com/webpack/webpack) - For bundling javascript files.
* [JQUERY](https://github.com/jquery/jquery) - Javascript library.
* [POSTCSS](https://github.com/postcss/postcss) - For styling files.
* [GULP](https://github.com/gulpjs/gulp) - For automating browser.

## Authors

* **Arnas Dickus**

