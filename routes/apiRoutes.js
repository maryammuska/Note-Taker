const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

// GET Route

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname,"../public/notes.html"))
);

router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.post("/api/notes", (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = json.parse(db);
    res.json(db);

    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    db.push(userNote);
    fs.writeFuleSync("db/db.json", JSON.stringify(db));
});

router.delete("/api/notes/", (req, res) => {
    let db = JSON.parse(fs.readFileSync("db/db.json"))
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    res.json(deleteNotes);
});

modeule.exports = router;