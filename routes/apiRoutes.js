const router = require("express").Routher();

const path = require("path");

// GET Route

router.get("/", (req, res) =>
res.sendFile(path.join(__dirname,"../public/notes.html"))
);

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..public.index.html"))
});

modeule.exports = router;