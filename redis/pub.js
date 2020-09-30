const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
// new Redis("/tmp/redis.sock");

setInterval(async () => {
        const t = JSON.stringify({"date": Date.now()});
        console.log(t);
        console.log(await redis.publish("ev", t));
    },
    100);

