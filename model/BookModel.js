const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    volume: Number
});

module.exports = mongoose.model("tbl_book", BookSchema);