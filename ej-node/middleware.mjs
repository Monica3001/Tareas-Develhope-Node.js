import express from 'express';

const app = express();

app.use(function setHeaderMiddleware(req, res , next){
    console.log('called : setheaderMiddleware');
    res.setHeader('header', '12345');
    next(); //tells express to call the next middleware
})

app.use(function middlewareError(req, res , next){
    console.log('called : middlewareError');
    next(new Error('there is an error'));
})

app.use(function sendDataMiddleware(req, res , next){
    console.log('called : sendDataMiddleware');
    res.json({data: 'data sent in body'});
    next();
})

app.use(function errorHandlerMiddleware(error, req, res , next){
    console.log('called : errorHandlerMiddleware');
    res.status(500);
    res.json({message: error.message});
    next();
})


app.listen(3000);


//TERMINAL:

//-> node:
//npm install
//npm install express
//npx nodemon middleware.mjs

//->bash:
//curl localhost:3000/ -v
