const { json } = require('express');
const express=require('express')

const app=express();
 
const port=process.env.Port || 3000
const router=require('./routes/router')
app.use(json())
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/users',router)
app.listen(port,()=>{
    console.log(`the server is running on port http://locahost:${port} port`)
})