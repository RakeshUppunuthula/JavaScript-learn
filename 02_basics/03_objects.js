
const mySbl = Symbol("key1")
const jsUser = {

    name :"Rakesh",
    age :24,
    email:"rakesh1181001@gmail.com",
    location:"Warangal",
    isLogedIn: false,
    LogedDays:['Monday','Tuesday'],
    [mySbl]: "key2"
}


jsUser.greetings = function(){

    console.log("Hello How Are You");
    
}



jsUser.greetingsTwo = function(){

    console.log(`Hello How Are You ${this.name}`);
    
}

Object.freeze(jsUser)
jsUser.email ="rakesh181000@gmail.com"
console.log(jsUser)
console.log(jsUser["age"]);
console.log(jsUser.LogedDays);
console.log(typeof jsUser[mySbl]);
//console.log(jsUser.greetings);  //----------function undefined (Anonymous)

// when the function does not return a value then it implicitly print Undefined 
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());





