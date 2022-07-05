const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('./config/db')
const bookRouter = require('./routes/book.routes')
const userRouter = require('./routes/user.routes')
const { Swaggiffy } = require('swaggiffy')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(userRouter)
app.use(bookRouter)


app.use('/', (req, res)=>{
    res.send("running")
})

const PORT = 5000;
new Swaggiffy().setupExpress(app).swaggiffy();
app.listen(PORT, () =>{
    console.log(`app running on port ${PORT}`)
})
