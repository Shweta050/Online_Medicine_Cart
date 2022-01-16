// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const cartSchema = new Schema(
    {
        userid: {
            type: Number,
            required: true
        },
        productid: {
            type: Number,
            required: true
        }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Cart', cartSchema, 'Cart');