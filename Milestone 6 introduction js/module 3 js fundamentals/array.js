const MyInfo = ['Rifat', 'Hossain', 25, 'Male'];
console.log(MyInfo);
console.log(MyInfo.MyInfo); 
console.log(typeof MyInfo.toString()); // This will log 'string'
console.log(MyInfo.toString()); // This will log 'Rifat

// Js Array at()
console.log(MyInfo.at(0)); // This will log 'Rifat'
console.log(MyInfo.at(1)); // This will log 'Hossain'

//array join()
console.log(MyInfo.join(' rifa pagol'));
console.log(MyInfo.join(" # "));
 // map method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // This will log [2, 4, 6, 8, 10]
// filter method
const evenNumbers = numbers.filter(num => num % 2 === 0);