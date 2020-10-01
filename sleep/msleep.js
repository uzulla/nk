
async function msleep(msec){
    return new Promise(resolve => setTimeout(resolve, msec));
}

(async()=>{
    console.log("sleep start");
    await msleep(1000);
    console.log("sleep fin.");
})();
