
const util = require("util");
const promisify = util.promisify;
const cp = require("child_process");
const exec = promisify(cp.exec);

(async()=>{
    const execfiles = [
        'ls -a',
        'sleep 1',
        'ls -a',
        'sleep 1',
        'ls -a',
    ];

    // sync
    for (const execfile of execfiles) {
        const stdout = await exec(
            `${execfile}`
        );
        console.log(stdout)
    }

    // async
    const promise_list = [];
    for (const execfile of execfiles) {
        promise_list.push(exec(
            `${execfile}`
        ));
    }

    const res = await Promise.all(promise_list);
    // promise_list.map( (row)=> console.log(row) );
    res.map( (row)=> console.log(row.stdout) );
})();
