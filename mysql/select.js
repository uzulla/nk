"use strict";

const mysql = require("mysql");
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

(async()=>{
    const getConnection = promisify(db.getConnection.bind(db));
    const connection = await getConnection();
    const query = promisify(connection.query.bind(connection));
    try {
        const cs = await query(
            "SELECT * FROM chair WHERE stock > 0 ORDER BY price ASC, id ASC LIMIT ?",
            [10]
        );
        console.log(cs.length);

        console.log(cs.map((row)=>row.name));

    } catch (e) {
        console.log(e)
    } finally {
        await connection.release();
        process.exit(0); // テストプログラムなので。
    }
})();



