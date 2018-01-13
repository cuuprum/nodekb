const express = require('express'); // Import library express
const path = require('path'); // Import lib path dr core lib nodejs
const mongoose = require('mongoose'); // Import lib mongoose
const bodyParser = require('body-parser');

// Connect ke mongodb, membuat variable koneksi db
mongoose.connect('127.0.0.1/nodekb');
//mongoose.connect('localhost/nodekb'); -> ntah kenapa harus konek ke internet kl pk localhost
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connnected to MongoDB');
});

// Check for DB error
db.on('error', function(err){
  console.log(err);
});

// Init App
const app = express(); // Bikin variable yang bs jalanin fungsi express

// Init Model (bring in models)
let Article = require('./models/article');

// Load View Engine
// Object views direct ke path yang ada view nya
app.set('views', path.join(__dirname, 'views')); // __dirname = lokasi folder ini skrg, "views" nama folder di tuju, jadi nodekb/views
app.set('view engine', 'pug');

// Body Parser - Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// Parse application/json
app.use(bodyParser.json());

// Set Public Folder
// Di express ada public folder yang isinya file static kayak css, about dll
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
// Buat route, yang kalau kita akses (request halaman) / (root) dia akan handle request kita
app.get('/', function(req, res){ // request ke app directory / (root), kalau udah ke akses jalanin callback function(req,res) jadi kita bs punya akses untuk jalnin object request dan response
  //res.send('Hello Wolrd~'); // Berikan respon ke browser, isinya send "hello world"

  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    }else{
      res.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

// Add Articles Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Article Page'
  });
});

// Add Submit POST route
app.post('/articles/add', (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.year = req.body.year;
  article.body = req.body.body;

  article.save(function(err){
    if(err){
      console.log(err);
      return;
    }else {
      res.redirect('/');
    }
  });
});

// Start Server
app.listen(3000, ()=>{ // Port mana yang bs di akses dari browser? server hanya akan listen ke port mana gitu
  console.log('Server started on port 3000. . .'); // Setelah listen, kasih callback (fungsi yg dijalanin setelah listen), tampilkan pesan sedang listening
});
