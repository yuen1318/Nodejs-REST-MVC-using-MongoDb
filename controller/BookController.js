const mongoose = require('mongoose');
const db = 'mongodb://localhost/bookdb';
var BookModel = require('../model/BookModel.js');

mongoose.Promise = global.Promise; // use native mongoose promises
mongoose.connection.openUri(db, function () {
    console.log("connected");
}).on("error", function () {
    console.log("error");
});

module.exports = {
    //create data
    create(req, res) {
        BookModel(req.body).save(function (err, data) {
            if (err) throw err;
            res.send("success");
            console.log("success");
        });
    },
    //read all data
    readAll(req, res) {
        BookModel.find({}, function (err, data) {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json(data);
            }
        }); //end of find
    },
    //read one data
    read(req, res) {
        BookModel.findOne({
            '_id': req.params.id
        }, function (err, data) {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json(data);
            }
        }); //end of find
    },
    //update one by id
    update(req, res) {
        BookModel.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    name: req.body.name,
                    author: req.body.author,
                    volume: req.body.volume
                }
            }, {
                upsert: true
            },
            function (err, data) {
                if (err) {
                    throw err;
                    console.log(err);
                } //end of if
                else {
                    console.log("success");
                    res.send("success");
                } //end of else
            });
    },
    //delete one data by id
    delete(req, res) {
        BookModel.findOneAndRemove({
            _id: req.params.id
        }, 
        function (err, data) {
            if (err) {
                throw err;
                console.log(err);
            } //end of if
            else {
                console.log("success");
                res.send("success");
            } //end of else
        });
    }

}