"use strict";

const mysql = require("mysql2");
const util = require("util");
const promisify = util.promisify;

const dbinfo = {
    host: "127.0.0.1",
    port: 3306,
    user: "isucon",
    password: "isucon",
    database: "isuumo",
    connectionLimit: 10,
};

const db = mysql.createPool(dbinfo);

(async () => {
    const getConnection = promisify(db.getConnection.bind(db));
    const connection = await getConnection();
    const query = promisify(connection.query.bind(connection));
    try {
        const cs = await query(
            // PHPにもほしすぎる機能だ…
            "SELECT * FROM test WHERE id in (?)",
            [[1, 2, 3]]
        );
        console.log(cs.length);

        console.log(cs.map((row) => row.text));

    } catch (e) {
        console.log(e)
    } finally {
        await connection.release();
        process.exit(0); // テストプログラムなので。
    }
})();



