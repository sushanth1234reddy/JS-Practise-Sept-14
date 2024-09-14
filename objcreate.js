let obj1={1:"hi",2:"hello"};
// for(i in obj1){
//     console.log(obj1[i]);
// }
let objrr=Object.create(obj1);
console.log(Object.getPrototypeOf(objrr));