const coding=["js","ruby","java","python","cpp"]
const values=coding.forEach( (item)=>{
    console.log(item)
})

console.log(values)

const myNum=[1,2,3,4,5,6,7,8]
const newNum=myNum.filter((nums)=>{
    console.log(nums)
    return nums
})
console.log(newNum)

const newNums=myNum.filter((nums)=> nums>0)
console.log(newNums)

const newNumbers=[]
myNum.forEach((num)=>{
    if(num>4)
    newNumbers.push(num)
})
console.log(newNumbers)

const numbers=[1,2,3,4,5,6]
const newArr=numbers.map((num)=>num+10).map((num)=>num+2)
console.log(newArr)
// filter to check and return.
// map always to retun with operation