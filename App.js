const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('mongodb://parag:parag@ds151004.mlab.com:51004/learndb',['products'])

const app = express();

const port = 1200;

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