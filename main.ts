const array = ["azeem", "faiz", "ahmed", "azeem", "faiz", "ahmed"];

// Concatenating an array with a string
let updatedArray: string[] = array.concat("mazhar");
console.log(updatedArray);

// Pushing a value into an array
array.push("azam");
console.log(array);

// Popping a value from an array
let poppedArray: string | undefined = updatedArray.pop();
console.log(poppedArray);
console.log(updatedArray);

// Joining array elements into a string
let newArray = updatedArray.join(" space ");
console.log(newArray);

// Slicing an array
let newArray2 = updatedArray.slice();
console.log(newArray2);

newArray2 = updatedArray.slice(2);
console.log(newArray2);

newArray2 = updatedArray.slice(0, 1);
console.log(newArray2);

newArray2 = updatedArray.slice(2, 3);
console.log(newArray2);

// Splicing an array
let newArray3 = updatedArray.splice(2, 3);
console.log(newArray3);
console.log(updatedArray);

// Using forEach method
let newArrayMethod = array.forEach((value, index) => {
    console.log(`Index is: ${index}  value is ${value}`);
});
console.log(newArrayMethod);

// Using a for loop
for (let i = 0; i < updatedArray.length; i++) {
    console.log(`Index is: ${i}  value is ${array[i]}`);
}

// Using map method
let newArrayMethod2 = array.map((value, index) => {
    return `Index is: ${index}  value is ${value}`;
});
console.log(newArrayMethod2);

// Using filter method
let isBigger = (str: string) => {
    return str.length > 4;
}
let newArrayMethod4 = array.filter(isBigger);
console.log(newArrayMethod4);
