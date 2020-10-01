"use strict";

const express = require("express");

const app = express();
// disable etag
app.set('etag', false);

app.get("/", async (req, res, next) => {
    res.set('Content-Type', 'text/plain')
    res.send("hello")
});

app.get("/404", async (req, res, next) => {
    res.set('Content-Type', 'text/html')
    res.status(404).send('<h2>not found</h2>')
});

app.get("/a.jpg", async (req, res, next) => {
    res.set('X-Accel-Redirect', '/some.jpg')
    res.status(200).send("")
});

app.get("/no-e-tag.jpg", async (req, res, next) => {
    res.set('X-Accel-Redirect', '/some.jpg')
    res.status(200).send("")
});

app.listen(8080, () => {
    console.log(`Listening 8080`);
});
