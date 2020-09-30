const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
// new Redis("/tmp/redis.sock");
redis.subscribe("ev", (err, count) => {

});
redis.on("message", (channel, message) => {
    console.log("Receive message %s from channel %s", message, channel);
    console.log((JSON.parse(message)));
});
