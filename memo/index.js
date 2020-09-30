"use strict";

const express = require("express");
const fs = require('fs').promises;

let memo = [];

const app = express();
app.use(express.json());

app.get("/", async (req, res, next) => {
    try {
        memo.push(
            req.connection.remoteAddress
        );

        res.json({
            memo: memo
        });
    } catch (e) {
        next(e);
    }
});

process.on('exit', async function() {
    // SIG INT 意外で死ぬとdumpできないけど、まあ調整しようはあるかな…
    console.log('exit')
});

process.on('SIGINT', async function() {
    console.log("SIGINT");
    await fs.writeFile(__dirname+'/memo.json', JSON.stringify(memo));
    console.log("memo dumped");
    process.exit(); // これいれないとC-cで終了しない
});

app.listen(8080, async () => {
    const json = await fs.readFile(__dirname+'/memo.json');
    memo = JSON.parse(json);
    console.log("memo loaded");
    console.log(`Listening 8080`);
});
