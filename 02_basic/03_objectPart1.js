 const mySim=Symbol("key1");

let user={
    name:"Pankaj",
    // mySim:"key1", 
    [mySim]:"key1",           //ye as a string act krega no ki as a Symbol,
    email:"pankaj@google.com",
    age:22,
    isloggedIn:true,
    "vill":"Ganauli",

}

// console.log(user.name);
// console.log(user["email"]);
// console.log(user.vill);

// console.log(user["vill"]);
// console.log(typeof user.mySim);
// console.log(user[mySim]);

user.name="Prem";    // Value Change Karne ke liye 
//console.log(user.name);
//Object.freeze(user.email)   // it means u can`t change email
//console.log(user);
 user.greeting = function(){
    console.log("Hello Js User");
    
 }

 console.log(user.greeting);
 console.log(user.greeting());

 user.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
    
 }

 console.log(user.greetingTwo);
 console.log(user.greetingTwo());

 
