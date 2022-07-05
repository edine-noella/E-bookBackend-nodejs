const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>{
        console.log('Connected to db successfully')
    }).catch((error) =>{
        console.log("Couldn't connect to db")
        console.log(error)
    })