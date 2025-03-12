//const tinder = new Object()   // this is a single ton object
ProfileUser ={}
ProfileUser.id = "19JJ1A0255"
ProfileUser.UserName ="Rakesh"
ProfileUser.isLogedIn = true
//console.log(ProfileUser);

regularUser={
   email: "someOne@gmail.com",
   FullName :{
      
      userFullName:{

        firstName : "Rakesh",
        LastName:"Uppunuthula"
      }


   }

}

//console.log(regularUser.FullName.userFullName.LastName);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

//const obj3 ={obj1,obj2}
target ={}

//const obj3 = Object.assign(target,obj1,obj2) // THIS ASSIGN wORKS
//console.log(obj3 === target)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const students = [
   {
       id: 1,
       name: "Rakesh",
       email: "rakesh@example.com"
   },
   {
       id: 2,
       name: "Amit",
       email: "amit@example.com"
   },
   {
       id: 3,
       name: "Priya",
       email: "priya@example.com"
   },
   {
       id: 4,
       name: "Sneha",
       email: "sneha@example.com"
   }
];

console.log(students[3].email);
console.log(Object.keys(ProfileUser))
console.log(Object.values(ProfileUser))
console.log(Object.entries(ProfileUser))

console.log(ProfileUser.hasOwnProperty("isLogedIn"))



const employee={

   eName :"Rakesh",
   eId : 96402,
   eSalary : 250000,
   eEmail :"rakesh181001@gmail.com"

}


const {eName: fullName} = employee

console.log(fullName)
