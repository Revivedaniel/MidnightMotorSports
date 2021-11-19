const mongoose = require("mongoose");

const { Schema } = mongoose;

const makeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    models: [{
        type: Schema.Types.ObjectId,
        ref: "Model"
    }]
});

const Make = mongoose.model("Make", makeSchema);

module.exports = Make;