const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hi world, This is Charen...</h1>");
});

app.listen(8000, () => {
    console.log("App running on port 8000...");
});
