const myNums=[1,2,3]
const myTotal=myNums.reduce( (acc,currValue)=>acc+currValue,0)
console.log(myTotal)
const myTotals=myNums.reduce(function (acc,currVal){
    console.log("acc: "+acc+"curr val: "+currVal)
    return acc+currVal
},0)
console.log(myTotals)

const shoppingCart=[
 {
    itemName: "jsCourse",
    price: 299
  },
 {
    itemName: "pyCourse",
    price: 399
  },
 {
    itemName: "cppCourse",
    price: 499
  }
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay)