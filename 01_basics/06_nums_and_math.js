// const id = 108
// console.log(id);

// const balance =new Number(108000.21)
// console.log(balance);


// console.log(typeof balance.toString())

// console.log(balance.toFixed(2))
// console.log(balance.toPrecision(6))  // type is String
// console.log(balance.toLocaleString('en-IN'))  // type  is String  where  en-In of indian Number System


// //+++++++++++++++++++++++++++ maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);  // math is an object Type
// console.log(Math.abs(-4))  //  here abs function changes the sign Built in function of math

// console.log(Math.round(4.2))  // if the round value point is below .5 than it will give floor value
// console.log(Math.round(4.5))  // if the round value point is above or equal to point .5 give the ceil value
// console.log(Math.ceil(4.6))  // ceil  function give the top most  integers  if the  decimal part is greater than 0
// console.log(Math.floor(4.6)) //floor function gives the least most integer if the decimal part evemn .9
// console.log(Math.sqrt(36))

// console.log(Math.min(4,5,6,2))
// console.log(Math.max(4,6,8,3,2))

// //------------------------------------------------

// console.log(Math.random()) // the value will be always in between (0,1]

min =10
max =20

console.log(Math.floor((Math.random())*( max-min+1)+min))