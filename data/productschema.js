const mongoose = require('mongoose');

const schema = mongoose.schema;

const productschema = new schema({
    name: string,
    price: number,
    manufacturer: string
})

module.exports = mongoose.model('product',productschema);