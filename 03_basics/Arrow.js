const user = {

    username:"Rakesh",
    price:999,
    welcomeMessage:function(){

        console.log(`${this.username},welcome to the website`);
      //  console.log(this);  -- this function here give current instance 
        
        
    }
}

// console.log(user.welcomeMessage());
// user.username ="Sam"
// console.log(user.welcomeMessage())

// console.log(this);  --- this prints {}  instance

// function newMethod(){

//     console.log(this);
    
// }
// newMethod()



const secondMethod =()=>{
    const username ="Rakesh"
    console.log(this);

}
secondMethod();


const addTwoNums = (num1,num2)=>{

    return num1+num2
}

console.log(addTwoNums(3,2));


//''''''''''''''''''''''''''''//
const addThreeNums = (num1,num2,num3)=>  num1+num2+num3

console.log(addThreeNums(3,2,5));

