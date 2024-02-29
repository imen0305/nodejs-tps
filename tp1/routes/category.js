const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>hello category</h1>")
})

router.get('/all',(req,res)=>{
    res.send([{id:1,name:"imen"},{id:2,name:"rihem"}])
})

router.get('/one',(req,res)=>{
    res.send([{id:1,name:"imen"}])
})

module.exports=router;