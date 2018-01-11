let mongoose = require('mongoose');

// Create Schema. Schema adalah struktur tabel, tempat definisi tipe data dll
// Article Schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    require: true // Harus diisi
  },
  author: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  body: {
    type: String,
    require: true
  }
});

// Eksport variabel yang isinya skema artikel untuk di pake di app.js
let Article = module.exports = mongoose.model('Article', articleSchema);
