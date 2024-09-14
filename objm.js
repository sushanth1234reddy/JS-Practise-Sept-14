let input={
    name:"vinod",
    place:"Hyderabad",
    salary:1000000,
    eid:"VIN100",
    nickname:"barre"

}
Object.freeze(input);

console.log(delete input.name);

input.address="nagole";

console.log(input)

console.log(input.name="akshay");


console.log(input)

