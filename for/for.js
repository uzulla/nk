const array = [1, 2, 3, 4, 5];
const hash = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: "e"};

console.log("=====")

const len = array.length
for (let i = 0; i < len; i++) {
    console.log(array[i])
}

console.log('====hash for of with keys k=>v')

for (const [k, v] of array.entries()) {
    console.log(`${k}:${v}`);
}

console.log('====Object k=>v')

for (const [k, v] of Object.entries(hash)) {
    console.log(`${k}:${v}`);
}

console.log('======for in hash')

for (const key in hash) {
    console.log(key)
    console.log(hash[key]) // ok
}


console.log('====')

array.forEach((v) => console.log(v));

console.log('====')

// ng hash.forEach((v)=>console.log(v));

console.log('====')

array.map((v) => console.log(v));

console.log('====')

// ng hash.map((v)=>console.log(v));

console.log('====')

for (const v of array) {
    console.log(v);
}

console.log('====')

// ng for(const v of hash){
//     console.log(v);
// }

console.log('====hash for in')

for (const k in hash) {
    console.log(hash[k])
}

console.log('====hash for of with keys')

for (let k of Object.keys(hash)) {
    console.log(hash[k]);
}

// console.log('====array for of with keys k=>v')
//
// for(const [k,v] of array) {
//     console.log(`${k}:${v}`);
// }
//
// console.log('====hash for of with keys k=>v')
//
// for(const [k,v] of hash) {
//     console.log(`${k}:${v}`);
// }


console.log('====array k=>v')

array.forEach((k, v) => {
    console.log(`${k}:${v}`);
});

console.log('====hash k=>v')

Object.entries(hash).forEach((v, k) => {
    console.log(k);
    console.log(v);
});


console.log('====')

Object.keys(hash).forEach((k) => {
    console.log(k)
})

console.log('====')

Object.keys(hash).forEach((k) => {
    console.log(hash[k])
})

console.log('====')
let r;

r = Object.keys(hash).map((k) => {
    return k
})
console.log(r);

console.log('====')

r = Object.keys(hash).map((k) => {
    return hash[k]
})

console.log(r);

console.log('====')
