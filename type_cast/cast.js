const str_num = "1234";
const str_float = "1234.5678";
const int = 1234;
const float = 2345.6789;

console.log(JSON.stringify(str_num));
console.log(JSON.stringify(parseInt(str_num)));
console.log(JSON.stringify(+str_num));

console.log(JSON.stringify(str_float));
console.log(JSON.stringify(+str_float));
console.log(JSON.stringify(parseFloat(str_float)));

console.log(JSON.stringify(float+""));
console.log(JSON.stringify(float.toString()));

console.log(JSON.stringify(int+""));
console.log(JSON.stringify(int.toString()));


