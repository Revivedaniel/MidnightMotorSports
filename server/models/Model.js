const mongoose = require("mongoose");

const { Schema } = mongoose;

const modelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    parts: [{
        type: Schema.Types.ObjectId,
        ref: "Part"
    }],

});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;

