let arr=[{name:"a",id:"133"},{name:"b",DOB:"sep 24"},{id:"667", role:"developer"}];
console.log("To check if array of objects has property name in them");
for(i of arr){
console.log(i.hasOwnProperty("name"));
}