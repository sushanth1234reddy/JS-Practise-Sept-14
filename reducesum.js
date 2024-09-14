const obj = { a: 1, b: 2, c: 3, d: 4 };
let valarr=Object.values(obj);
let sum=valarr.reduce((total,a)=>total+a,0);
console.log(sum);