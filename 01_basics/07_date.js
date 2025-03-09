let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

console.log(myDate.toTimeString())
console.log(myDate.getDate())
console.log(myDate.getMonth())
console.log(myDate.getFullYear())


let newDate = new Date()

console.log(newDate.toLocaleString('default',{ weekday:"long"}))