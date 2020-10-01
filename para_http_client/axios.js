const axios = require('axios');
const http = require('http');
const https = require('https');

// const http = new http.Agent({ keepAlive: true });
const httpsAgent =  new https.Agent({ keepAlive: true })

async function getSome() {
    try {
        return await axios.get('https://http2.akamai.com/demo/tile-1.png', {
            // httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: httpsAgent
        });
    } catch (error) {
        console.log(error.response);
    }
}

(async()=>{
    console.time("sw")
    const p = await getSome();
    console.log(p.status);
    // p.then((v) => console.log(v));
    console.timeEnd("sw")
})();
