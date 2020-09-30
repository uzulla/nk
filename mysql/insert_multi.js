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

(async () => {
    const getConnection = promisify(db.getConnection.bind(db));
    const connection = await getConnection();
    const beginTransaction = promisify(connection.beginTransaction.bind(connection));
    const query = promisify(connection.query.bind(connection));
    const commit = promisify(connection.commit.bind(connection));
    const rollback = promisify(connection.rollback.bind(connection));
    try {
        await beginTransaction();

        const list = [];
        list.push([
                query(
                    "INSERT INTO test(text, num) VALUES(?,?)",
                    ["text", 1]
                ),
                query(
                    "INSERT INTO test(text, num) VALUES(?,?)",
                    ["text", 1]
                )
            ]
        );
        list.push(
            query(
                "INSERT INTO test(text, num) VALUES(?,?)",
                ["text", 1]
            )
        );
        list.push(
            query(
                "INSERT INTO test(text, num) VALUES(?,?)",
                ["text", 1]
            )
        );
        list.push(
            query(
                "INSERT INTO test(text, num) VALUES(?,?)",
                ["text", 1]
            )
        );

        const promise_list = Promise.all(list);

        const res_list = await promise_list;
        console.log(res_list[0][0]);
        console.log(res_list[1].insertId);

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



