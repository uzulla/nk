"use strict";

const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res, next) => {

    console.log(req.cookies)

    console.log(req.cookies['test1'])

    console.log(cookieParser.JSONCookies(req.cookies['some_json']))

    try {
        res.cookie('test1', 'value1')
        res.cookie('test2', 'value2')
        res.cookie('some_json', {some: "data"})
        res.json({
            this: "is test",
        });
    } catch (e) {
        next(e);
    }
});

app.listen(8080, () => {
    console.log(`Listening 8080`);
});
