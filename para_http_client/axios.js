const axios = require('axios');

async function getSome() {
    try {
        return await axios.get('https://http2.akamai.com/demo/tile-1.png');
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
