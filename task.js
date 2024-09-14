// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.

let obj1 = { a: 1, b: 2, c: 3, d: 4 };
let output={};
for(i in obj1){
    if(obj1[i]>2){
        console.log(`${i}:${obj1[i]}`);
       
        
    }
}

