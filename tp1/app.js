const express = require('express')
const app =express()
const category = require('./routes/category')

app.use('/category',category)





app.use(express.json())

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})