const express = require('express'); // Import library express
const path = require('path'); // Import lib path dr core lib nodejs

// Init App
const app = express(); // Bikin variable yang bs jalanin fungsi express

// Load View Engine
// Object views direct ke path yang ada view nya
app.set('views', path.join(__dirname, 'views')); // __dirname = lokasi folder ini skrg, "views" nama folder di tuju, jadi nodekb/views
app.set('view engine', 'pug');

// Home Route
// Buat route, yang kalau kita akses (request halaman) / (root) dia akan handle request kita
app.get('/', function(req, res){ // request ke app directory / (root), kalau udah ke akses jalanin callback function(req,res) jadi kita bs punya akses untuk jalnin object request dan response
  //res.send('Hello Wolrd~'); // Berikan respon ke browser, isinya send "hello world"
  res.render('index');
});

// Start Server
app.listen(3000, ()=>{ // Port mana yang bs di akses dari browser? server hanya akan listen ke port mana gitu
  console.log('Server started on port 3000. . .'); // Setelah listen, kasih callback (fungsi yg dijalanin setelah listen), tampilkan pesan sedang listening
});