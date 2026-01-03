let myArray=[0,1,2,3,4,5];
//console.log(myArray);

let anotherArr=new Array(11,22,33,44,55)
//console.log(anotherArr);


//     Array Methods

// anotherArr.push(66);
// console.log(anotherArr);
// anotherArr.pop()  // pop last elementr without  any input 
// console.log(anotherArr);
// anotherArr.unshift(0)  // Add number on  Start index   not recomemded 
// console.log(anotherArr);
// anotherArr.shift()
// console.log(anotherArr);
// console.log(anotherArr.includes(33));
// console.log(anotherArr.indexOf(44));

// const newArry=anotherArr.join()
// console.log(anotherArr);
// console.log(newArry);
// console.log(typeof newArry);

const myn1= myArray.slice(1,3)
 console.log(myn1);
 console.log("B", myArray);


const myn2= myArray.splice(1,3)
console.log(myn2);
console.log("B" ,myArray);



// In JavaScript, slice() and splice() are both used with arrays, but they work very differently.

// 1️⃣ slice()

// 👉 Does NOT change the original array

// Purpose:

// Used to extract a portion of an array

// Returns a new array

// Syntax:
// array.slice(startIndex, endIndex)


// endIndex is not included

// Example:
// let arr = [1, 2, 3, 4, 5];

// let result = arr.slice(1, 4);

// console.log(result); // [2, 3, 4]
// console.log(arr);    // [1, 2, 3, 4, 5] (original unchanged)

// Key Points:

// Non-destructive

// Used for copying or extracting data

// Can be used without parameters to copy an array

// 2️⃣ splice()

// 👉 Changes (modifies) the original array

// Purpose:

// Used to add, remove, or replace elements

// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)

// Example (Remove elements):
// let arr = [1, 2, 3, 4, 5];

// let removed = arr.splice(1, 2);

// console.log(removed); // [2, 3]
// console.log(arr);     // [1, 4, 5]

// Example (Add elements):
// let arr = [1, 2, 5];

// arr.splice(2, 0, 3, 4);

// console.log(arr); // [1, 2, 3, 4, 5]

// Key Points:

// Destructive

// Used for editing arrays

// Returns removed elements

// 🔥 Main Differences (Exam Friendly Table)
// Feature	slice()	splice()
// Modifies original array	❌ No	✅ Yes
// Returns	                New array	               Removed elements
// Used for	Copy / extract	Add / remove / replace
// Parameters	start, end	start, deleteCount, items




