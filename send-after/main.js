"use strict";

const express = require("express");

const app = express();
// disable etag
app.set('etag', false);

async function msleep(msec){
    return new Promise(resolve => setTimeout(resolve, msec));
}

app.get("/", async (req, res, next) => {
    res.set('Content-Type', 'text/plain')
    res.send("hello")
    await msleep(1000);
    console.log("i m alive");
});

app.listen(8080, () => {
    console.log(`Listening 8080`);
});

