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
    const beginTransaction = promisify(connection.beginTransaction.bind(connection));
    const query = promisify(connection.query.bind(connection));
    const commit = promisify(connection.commit.bind(connection));
    const rollback = promisify(connection.rollback.bind(connection));
    try {
        await beginTransaction();

        const res = await query(
            "INSERT INTO test(text, num) VALUES ? ", [
                [
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                    ["text", 1],
                ]
            ]
        )

        console.log(res);
        //このときのinsertIdは「最初の」番号であるらしい。

        await commit();
        console.log("ok")

    } catch (e) {
        await rollback();
        console.log(e);
    } finally {
        await connection.release();
        process.exit(0);
    }
})();



