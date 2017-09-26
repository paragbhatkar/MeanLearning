const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products')

const app = express();

const port = 1200;

mongoose.connection.once('open',(err)=>{
    console.log('DB connected');
});



app.get('/',(req,res)=>{
    db.products.find((err, products)=>{
        if(err){
            res.send(err);
        }
        res.json(products);

    })
})

app.listen(port,()=>{
    console.log('App started.');
})