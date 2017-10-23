const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController.js");

router.get('/',BookController.readAll);
router.get('/:id',BookController.read);
router.post("/",BookController.create);
router.put('/:id',BookController.update);
router.delete('/:id',BookController.delete);

module.exports = router;