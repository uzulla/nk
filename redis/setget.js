
const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
// new Redis("/tmp/redis.sock");

(async()=>{
    console.log(await redis.set("foo", "bar"));
    console.log(await redis.set("foo", "boo"));
    console.log(await redis.get("foo"));

    process.exit(0);
})();
