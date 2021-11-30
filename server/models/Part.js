const mongoose = require("mongoose");

const { Schema } = mongoose;

const partSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    year: {
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    quantity: {
        type: Number,
    }
});

const Part = mongoose.model("Part", partSchema);

module.exports = Part;
