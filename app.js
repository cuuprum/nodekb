const express = require('express'); // Import library express

const app = express(); // Bikin variable yang bs jalanin fungsi express

// Buat route, yang kalau kita akses (request halaman) / (root) dia akan handle request kita
app.get('/', function(req, res){ // request ke app directory / (root), kalau udah ke akses jalanin callback function(req,res) jadi kita bs punya akses untuk jalnin object request dan response
  res.send('Hello Wolrd~'); // Berikan respon ke browser, isinya send "hello world"
});

app.listen(3000, ()=>{ // Port mana yang bs di akses dari browser? server hanya akan listen ke port mana gitu
  console.log('Server started on port 3000. . .'); // Setelah listen, kasih callback (fungsi yg dijalanin setelah listen), tampilkan pesan sedang listening
});
