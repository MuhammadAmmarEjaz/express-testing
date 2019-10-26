const swaggerUi = require('swagger-ui-express');
const swaggerdoc= require('swagger-jsdoc');

const dist = require('swagger-ui-dist');

const options = {
    swaggerDefinition:{
        info:{
            title:'Test API',
            version:'1.0.0',
            description:'Testing is happening'
        }
    },
    apis:['endpoints.js']
}

const specs = swaggerdoc(options);

module.exports = (app) =>{
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs));
}
