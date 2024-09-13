const express = require('express')
const app=express()
const router = require('./routes/user')
const port= 3000

app.use(router)




app.listen(port,(err)=>{
    if(err){
        console.log("server is busy")
    }else{
        console.log("server is on")
    }

})