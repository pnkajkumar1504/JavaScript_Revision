const name = "Pankaj";
const repoCount = 50;
console.log(name + repoCount+" value"); // Not Recomende 

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);  // String Interpoletion
const gameName=new String("Prem-Chandra");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('0')); 
console.log(gameName.indexOf('r'));
// Slice Operation
const newGame= gameName.substring(0, 5)   // Here rage is 0 to 5 but 5 is not included means index 4 tak , agar -ve value de bhi diye to start 0 se hoga
console.log(newGame);

const anotherString= gameName.slice(-11, 2)  // -ve means start from last 
console.log(anotherString);


const anotherStringOne= "    pankaj  "
console.log(anotherStringOne); // Contain Space
console.log(anotherStringOne.trim());//output // Avoid Space

const url="https:/pankaj%20com";
console.log(url.replace('%20', '.'))  // %20 ko dot me replace kr dega 

console.log(url.includes("pankaj"));  // includes ka matlb pankaj key word is url ke ander hi ki nahi


console.log(gameName.split("-")); //String to arry from seperator which is given by me here "-"









