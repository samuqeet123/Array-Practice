"use strict";
const array = ["azeem", "faiz", "ahmed", "azeem", "faiz", "ahmed"];
let updatedArray = array.concat("mazhar");
// let updatedArray:string[] = ["mazhar"].concat(array)
// console.log(updatedArray)
// array.push("azam")  // it will add value but will return a number
// console.log(array)
// let poppedArray:string | undefined = udatedArray.pop()
// console.log(poppedArray)
console.log(updatedArray);
// let newArray = udatedArray.join(" space ")
// console.log(newArray)
// let newArray2 = udatedArray.slice()
// console.log(newArray2)
// newArray2 = udatedArray.slice(2)
// console.log(newArray2)
// newArray2 = udatedArray.slice(0, 1)
// console.log(newArray2)
// newArray2 = udatedArray.slice(2, 3)
// console.log(newArray2)
// let newArray3 = udatedArray.splice(2, 3)
// console.log(newArray3)
// console.log(udatedArray)
let newArrayMethod = array.forEach((value, index) => { console.log(`Index is: ${index}  value is ${value}`); });
console.log(newArrayMethod);
for (let i = 0; i < updatedArray.length; i++) {
    console.log(`Index is: ${i}  value is ${array[i]}`);
}
let newArrayMethod2 = array.map((value, index) => { return `Index is: ${index}  value is ${value}`; });
console.log(newArrayMethod2);
let isBigger = (str) => {
    return str.length > 4;
};
let newArrayMethod4 = array.filter(isBigger);
console.log(newArrayMethod4);
