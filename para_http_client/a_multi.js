// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

async function getMulti(){
    try {
        const list = [];
        for (i = 0; i < 379; ++i) {
            list.push(fetch(`https://http2.akamai.com/demo/tile-${i}.png`));
        }
        return Promise.all(list);
    } catch (error) {
        console.log(error.response);
    }
}

(async()=>{
    console.time("sw")
    const p = await getMulti();
    console.log(p.length);
    console.log(await p[0].text());
    // p.then((v) => console.log(v));
    console.timeEnd("sw")
})();

// const p = request();
// p.then((res_array) => res_array.map((res) => console.log(res.status)))
