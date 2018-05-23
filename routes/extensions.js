const express = require("express");
const router = express.Router();

const dbData = require("../models");

router.get("/", (req, res) => {
    dbData.Extension.find({}, "-_id -__v").then((exts) => {
        res.json(exts);
    }).catch(err => console.log(err));
});

//Development mode only
// router.get("/create", (req, res) => {
//     res.render("createExtension.ejs");
// });

//Development mode only
// router.post("/", (req, res) => {
//     dbData.Extension.create({
//         category: req.body.category,
//         subCategory: req.body.subCategory,
//         desc: req.body.desc,
//         gLevel: req.body.gLevel,
//         gXp: req.body.gXp,
//         gPrice: req.body.gPrice,
//         level: req.body.level,
//         xp: req.body.xp,
//         mats: [
//             {
//                 mat: req.body.mat0,
//                 amount: req.body.amount0
//             },
//             {
//                 mat: req.body.mat1,
//                 amount: req.body.amount1
//             },
//             {
//                 mat: req.body.mat2,
//                 amount: req.body.amount2
//             }
//         ]
//     }).then((newExt) => {
//         console.log(newExt);
//         res.redirect("/api/extensions/create");
//     }).catch(err => console.log("Something went wrong " + err));
// });

//Development mode only
// router.get("/delete/:id", (req, res) => {
//     dbData.Extension.findByIdAndRemove(req.params.id)
//     .then(delExt => res.redirect("/api/extensions"))
//     .catch(err => console.log("Something went wrong: " + err));
// });

router.get("/:category/:subCategory?", (req, res) => {
    function reqType(arg) {
        if(arg != undefined) {
            return {category: req.params.category, subCategory: req.params.subCategory}
        }
        return {category: req.params.category}
    }
    dbData.Extension.find(reqType(req.params.subCategory), "-_id -__v").then((ext) => {
        if(!ext.length) {
            let message = `no items were found with the ${req.params.category} category`;
            if(req.params.subCategory != undefined) {
                message += ` and ${req.params.subCategory} sub-category`;
            }
            res.json({message: message});
        } else {
            res.json(ext);
        }
    }).catch(err => console.log(err));
});

router.get("*", (req, res) => {
    res.json({message: "invalid url"});
});

module.exports = router;
