let a=5

if (true) {
    let a=10
    const b= 15
    var c=20
    //console.log("Inneer a = ", a);
    

}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="Pankaj"
    function two(){
        const website="Youtube.com"
        //console.log(username);
        
    }
    //console.log(website);

    //two()
    
}
//one()

if (true) {
    const username = "Pankaj"
    if(username === "Pankaj"){
        const website = " YouTube.com"
        //console.log(username + website);
    }
    //console.log(website);
    
        
}
//console.log(username);


console.log(addOne(2))
function addOne(num){
    return num+1
}





//addTwo(3)
 const addTwo=function(num){     // execution contest , it means u can`t access without deceleration but in simple function u can access 
    return num + 2
}

