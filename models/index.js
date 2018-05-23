const mongoose = require("mongoose");
const db = require("./dbUrl");

mongoose.connect(db.dbURL);

// mongoose.set("debug", true);
mongoose.Promise = Promise;

module.exports.Extension = require("./extensions");
module.exports.Contract = require("./contracts");
