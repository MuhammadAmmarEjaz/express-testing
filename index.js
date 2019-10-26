const express = require('express');
const app = express();

const endpoints = require('./endpoints');
const swaggerDoc = require('./swaggerDoc');

endpoints(app);
swaggerDoc(app);



app.use((err,req,res,next) =>{
    console.log('something went wrong' + err)
})

app.listen(3500,()=>{
    console.log('Server is running on 3500')
})