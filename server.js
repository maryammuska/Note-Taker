// Dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");

const html = require("./routes/htmlRoutes");
const api = require("./routes/apiRoutes"); 

// Use Express
const app = express();

// Variable Port 
const PORT = process.env.PORT || 3001;

// Creating Route
app.use(express.static("./public"));

// Creating parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api", api);
app.use("/", html);

// app listener 

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});
