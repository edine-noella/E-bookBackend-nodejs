const express = require('express')
const { addBook, getAll, getOne, deleteBook, updateBook } = require('../controllers/book.controller')
const{ registerDefinition} = require('swaggiffy');
const router = express.Router({mergeParams: true})


router.post('/api/v1/books', addBook)
router.get('/api/v1/books', getAll)
router.get('/api/v1/books/:bookId', getOne)
router.put('/api/v1/books/:bookId', updateBook)
router.delete('/api/v1/books/:bookId', deleteBook)

registerDefinition(router, { tags: 'Books', mappedSchema: 'Book', basePath: '/api/v1/books' });
module.exports = router