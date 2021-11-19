const mongoose = require("mongoose");

const { Schema } = mongoose;

const yearSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }]
});

const Year = mongoose.model("Year", yearSchema);

module.exports = Year;
