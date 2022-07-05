const Book = require("../models/book.model");
const User = require("../models/user.model")

exports.addBook = async (req, res) => {
  try {
    const author = req.body.author
    const user = await User.findById(author)
    if(!user) return res.status(404).send("author doesn't exist")
    
    
    const book = new Book({
      name: req.body.name,
      author
    });

    //if book name already exists
   const bookExists = await Book.findOne({name: req.body.name})
   if(bookExists) return res.status(400).send("book already exists")

    await book.save();

    res.status(201).send(book);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};



exports.getAll = async (req, res) => {
  try {
    const books = await Book.find().populate('author');// to get the referenced author of the book
    res.send(books);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

exports.getOne = async(req, res) => {
    try {
        const book = await Book.findById({_id: req.params.bookId})
        if(!book) return res.status(404).send()
        res.send(book)
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

exports.updateBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndUpdate({_id: req.params.bookId},req.body)
        // console.log(req.body)
        if(!book) return res.status(404).send()
         res.send(book)
    } catch (error) {
        res.status(500).send(error.toString());
    }
}



exports.deleteBook = async(req, res) =>{
    try {
        const book = await Book.findByIdAndDelete({_id: req.params.bookId})
        if(!book) return res.status(404).send()
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error.toString());
    }
}
