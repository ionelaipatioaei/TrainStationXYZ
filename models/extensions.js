const mongoose = require("mongoose");

const extensionSchema = new mongoose.Schema({
    category: String,
    subCategory: String,
    desc: String,
    gLevel: Number,
    gXp: Number,
    gPrice: Number,
    level: Number,
    xp: Number,
    mats: [
        {
            mat: String,
            amount: Number,
            _id: false
        },
        {
            mat: String,
            amount: Number,
            _id: false
        },
        {
            mat: String,
            amount: Number,
            _id: false
        }
    ]
});

const Extension = mongoose.model("Extension", extensionSchema);

module.exports = Extension;
