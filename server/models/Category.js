const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    parts: [{
        type: Schema.Types.ObjectId,
        ref: "Part"
    }]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category; 
