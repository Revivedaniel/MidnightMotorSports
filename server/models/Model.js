const mongoose = require("mongoose");

const { Schema } = mongoose;

const modelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    years: [{
        type: Schema.Types.ObjectId,
        ref: "Year"
    }],

});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;

