const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');

const user = require('./routes/user');
const swaggerDocs = require('./swagger');
const baseAPI = '/api/v1';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(baseAPI + '/user',user);


app.use((err,req,res,next) =>{
    console.log('something went wrong' + err)
})

app.get('/',(req,res)=>{
    res.send(200,{message:"Welcome to your node server"});
})

app.listen(3000,()=>{
    console.log('Server is running on 3000')
})