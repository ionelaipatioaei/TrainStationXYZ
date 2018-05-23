/**
 * NOT USED
 */

const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
    difficulty: String,
    contractor: String,
    contractNumber: String,
    imgRef: String,
    minLevel: Number,
    trainType: Number,
    objective: {
        taskType: String,
        optional: Boolean,
        task: [

        ],
        optionalTask: [

        ],
        _id: false
    },
    reward: {
        xp: Number,
        mat: {
            matType: String,
            amount: Number,
            _id: false
        },
        _id: false
    }
});

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
