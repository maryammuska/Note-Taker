const router = require("express").Router();
const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");

// GET Route

router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

router.post("/api/notes", (req, res) => {
    let db = fs.readFileSync("db/db.json");
    db = JSON.parse(db);
    res.json(db);

    let dbNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    db.push(dbNote);
    fs.writeFileSync("db/db.json", JSON.stringify(db));
});

router.delete("/api/notes/:id", (req, res) => {
    let db = JSON.parse(fs.readFileSync("./db/db.json"));
    let deleteDb = db.filter((item) => item.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteDb));

    res.json(deleteDb);
});

module.exports = router;