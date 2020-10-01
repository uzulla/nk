const axios = require('axios');
const https = require('https'); // たいさない... まあ、パラレルだしな、
const httpsAgent = new https.Agent({
    // https://nodejs.org/api/https.html
    // https://nodejs.org/api/http.html#http_new_agent_options
    keepAlive: true
}) // 速度的には、たいさない。書き方が多分悪い

// const Agent = require('agentkeepalive');
//
// const keepaliveAgent = new Agent({
//     maxSockets: 600,
//     maxFreeSockets: 10,
//     timeout: 60000, // active socket keepalive for 60 seconds
//     freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
// });

async function getMulti() {
    try {
        const list = [];
        for (i = 0; i < 379; ++i) {
            list.push(axios.get(`https://http2.akamai.com/demo/tile-${i}.png`,
                {
                    // httpAgent: new http.Agent({ keepAlive: true }),
                    httpsAgent: httpsAgent
                    // 速度的には、たいさない。書き方が多分悪い
                }
                ));
        }
        return Promise.all(list);
    } catch (error) {
        console.log(error.response);
    }
}

(async () => {
    console.time("sw")
    const p = await getMulti();
    console.log(p.length);
    // console.log(p[0])
    // p.then((v) => console.log(v));
    console.timeEnd("sw")
})();

// const p = request();
// p.then((res_array) => res_array.map((res) => console.log(res.status)))
