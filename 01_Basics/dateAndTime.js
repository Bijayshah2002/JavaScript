let myDate = new Date();
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log("the current month is " + myDate.getMonth())

let myDate1=new Date("2023,01,22")
console.log('the set date is ${myDate1}')
console.log(myDate.toLocaleString())
// timestamp

let myTimeStamp = Date.now()// returns is milisecond
console.log(myTimeStamp)
console.log(Date.now()/1000) // dividing by 1000 to fine in seconds\
// you can use Math.floor to avoid decimal 
console.log(new Date().getDay())
let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate)