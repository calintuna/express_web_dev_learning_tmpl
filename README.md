## Template
It's a node.js express app template developed using concepts learned in the `web-development-bootcamp`.

## Inspired By
Dr. Angela's The Complete 2024 Web Development Bootcamp.

## How to Start
### install packages by npm
```shell
npm run install
```
### install global library to compile customized scss files (global)
```shell
npm i -g bootstrap
npm i -g sass
```
### use sass to compile customized scss files and put result into public/styles/custom.css
```shell
npm run build_css
# can add --watch to compile scss files right after it is saved/changed
## sass --watch  bootstrap_custom.scss ../public/styles/custom.css
```
By this stage, there should be a custom.css file inside the ./public/styles folder.


### startup the web server
```shell
npm start
```
