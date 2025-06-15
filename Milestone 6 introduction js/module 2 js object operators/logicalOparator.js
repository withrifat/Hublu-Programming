// ( logical NOT)   ! it's change value by oposit
let eligible = false,
    required = true,
    final = true;
    
console.log(!eligible); // true
console.log(!required); // false
// ( logical AND )      &&
console.log(required && eligible) //whn both are true then op is true
//  { logical OR }      ||
console.log(required || eligible) //whn any one is true then op is true

console.log(true && false); // when both are false then op is false
console.log(! true); // oposite of false is true

count = 0;
let result = count || 10;
console.log(result); 

let result1 = true;
let result2 = false;
let result3 = result1 ?? result2;
console.log(result3); 
