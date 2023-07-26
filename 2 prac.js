let numbersArray = [100, 210, 301, 140, 410];
console.log("Length of the array:", numbersArray.length);

console.log("Element at index 2:", numbersArray[2]);


numbersArray.push(60);
console.log("Array after push:", numbersArray);

numbersArray.pop();
console.log("Array after pop:", numbersArray);


numbersArray.shift();
console.log("Array after shift:", numbersArray);


numbersArray.unshift(5); // Adds 5 at the beginning of the array
console.log("Array after unshift:", numbersArray);


let joinedArray = numbersArray.join(", ");
console.log("Joined array:", joinedArray);


delete numbersArray[2]; // Deletes the element at index 2 (value will be 'undefined')
console.log("Array after delete:", numbersArray);


let newArray = numbersArray.concat([60, 70, 80]); // Concatenates two arrays
console.log("Concatenated array:", newArray);


let flattenedArray = [1, [2, 3], [4, [5]]];
flattenedArray = flattenedArray.flat(); // Flattens nested arrays
console.log("Flattened array:", flattenedArray);


numbersArray.splice(1, 2, 200, 300); // Removes 2 elements starting from index 1 and inserts 200, 300
console.log("Array after splice:", numbersArray);


let slicedArray = numbersArray.slice(1, 4); // Extracts elements from index 1 to index 3 (4-1)
console.log("Sliced array:", slicedArray);


let person = {
    name: "jiya",
    age: 19,
    gender: "Female",
};

function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
    console.log("city:", personObj.city);
}

displayPersonDetails(person);