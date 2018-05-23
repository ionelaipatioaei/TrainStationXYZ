const express = require("express");
const router = express.Router();

const dbData = require("../models");

router.get("/", (req, res) => {
    res.json({message: "this end point doesn't have any data!"});
});

module.exports = router;
