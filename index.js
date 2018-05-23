const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.sendFile(path.join("build/index.html", 'build', 'index.html'));
});

const extensionsRoutes = require("./routes/extensions.js");
const contractsRoutes = require("./routes/contracts.js");

app.use("/api/extensions", extensionsRoutes);
app.use("/api/contracts", contractsRoutes);

app.get("/api/*", (req, res) => {
    res.json({message: "no path defined"});
});

app.listen(process.env.PORT || "3001", () => {
    console.log("TSXYZ started...");
});
