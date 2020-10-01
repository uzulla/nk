"use strict";

const express = require("express");
const fs = require('fs');
const axios = require('axios');

const bufferSize = 1000000;
const app = express();

app.get("/proxy", async (req, res, next) => {

    try {
        // axios はRequest Configで受信データのタイプを設定できる。今回は arraybuffer が適切。
        const axios_res = await axios.get(
            "https://http2.akamai.com/demo/tile-1.png",
            {responseType: "stream"}
            );

        res.writeHead(200, {
            "Content-Type": "image/png",
            "Content-Size": 1000000000, // 1GBとかかいてみてる（本当は正しい値を入れるべきだろうが
        })

        // console.log(axios_res);

        axios_res.data.pipe(res)

    } catch (e) {
        next(e);
    }
});

app.get("/", async (req, res, next) => {

    try {
        const stream = fs.createReadStream(
            __dirname + '/data.txt',
            { highWaterMark: bufferSize }
        )

        res.writeHead(200, {
            "Content-Type": "application/octet-stream",
            "Content-Size": 1000000000, // 1GBとかかいてみてる（本当は正しい値を入れるべきだろうが
        })

        stream.pipe(res)

    } catch (e) {
        next(e);
    }
});

app.listen(8080, () => {
    console.log(`Listening 8080`);
});
