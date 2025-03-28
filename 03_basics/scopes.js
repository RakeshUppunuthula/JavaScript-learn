

// if(true){
//     let a =10
//     const b =20
//     var c =30

// }
// console.log(c)
// console.log(a)
// console.log(b)


function one(){

    const username ="Rakesh"

    function two(){

        const email ="rakesh181001@gmail.com"
        console.log(username)
    }
   // console.log(email)
    two()
}
one()

// -------------------- differnce in two values declartion and mode of execution


//addOne(5)  -------ifi call above function no errro it executes 
function addOne(num){
   return num+1

}

addOne(5)


//addTwo(5)   ----- if i call above intilization it throws an error
const addTwo = function(num){

    return num+1
}

addTwo(5)