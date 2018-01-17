## nodekb Project
This project will be Knowledgebase website base on nodeJS using Express Framework, PUG template for front-end and Mongodb as database  
Base on tutorial Node.js & Express From Scratch by Traversy Media
https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp

## Environtment
  * Base on : NodeJS v6.10
  * Text Editor : Atom https://atom.io/
  * Console : Git Bash https://git-scm.com/download/win
  * NodeJS Framework : ExpressJS http://expressjs.com/ (Install using npm)
  * Template Engine : Pug https://pugjs.org/api/getting-started.html (Install using npm)
  * Database : Mongodb Community Server v3.6 https://www.mongodb.com/download-center?jmp=nav#community
  * Other Modules or Plugins :
    * NODEMON https://nodemon.io/ (install using npm)
    * language-pug : Pug syntax highlight for Atom (install at atom extension)

## TODO
 PART 1 Intro & Environment
   * [x] Setup environtment

 PART 2 App Setup & Express Install
   * [x] Create project, init using npm init and write package.json to describe dependencies
   * [x]  Create app.js as starting file and set npm script "start" to start app.js as first file starting Project
   * [x] Install Express Framework using npm and --save to register it to dependencies
   * [x] Create simple server, route and display hello wolrd  

Part 3 Pug Template Engine
  * [x] Install Pug template engine, setting app.js to run the view (index.pug)
  * [x] Basic Pug html
  * [x] Write html on .pug, read variables from .js to .pug, install nodemon module so we dont need restart server each time we do changes
  * [x] Create route when localhost:3000/articles/add goes to view/add_article
  * [x] Create layout.pug and use extends, so we dont have to repeat same code for header etc. We can layout at each page
  * [x] Create content (articles) using array and loop
  * [x] Install pug highligt at atom

Part 4 Mongoose & Model Setup
  * [x] Trying using mongodb console, create, insert and view db
  * [x] Connecting app to mongodb through Mongoose
  * [x] Create model and schema
  * [x] Connect app.js with model and send value to website
  * [x] Show all attribute from article to view using pug variable

Part 5 Save Articles to MongoDB
 * [x] Create form using pug on article/add
 * [x] Store values from display form, to mobel object and redirect to root

Part 6 Bower & Bootstrap
 * [x] Install Bower, buat file .bowerrc dan folder bower_components and install Bootstrap
 * [x] Edit html, add .container .list-group
 * [x] Add Navbar done. Must using jquery and bootstrap 3

Part 7 Update & Delete Articles
 * [ ]
 * [ ]

Part 8 Messaging & Validation
* [ ]
* [ ]

Part 9 User Registration
* [ ]
* [ ]

Part 10  User Login
* [ ]
* [ ]

Part FINAL Deploying Our App
* [ ]
* [ ]
