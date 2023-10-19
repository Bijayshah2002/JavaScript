let myArr=[1,2,3,4,5]
console.log(myArr)
console.log(myArr.length)
console.log(myArr[2])
let myArr1=["bijay",2,"hello","myNaame",3]
console.log(myArr1)
console.log(myArr[1])
let myArr2=[1,2,3,4,5]
myArr2.push(6)
console.log(myArr2)
myArr2.pop()
console.log(myArr2)
myArr2.unshift(3)// push element in front of the array

console.log(myArr2)
myArr2.shift()
console.log(myArr2)
console.log(myArr2.includes(3))
console.log(myArr2.indexOf(43))// returns -1 if the index doesn't exist

const newArr= myArr2.join();
console.log(typeof myArr2)
console.log(typeof newArr)

// slice and splice
let arrTest=[1,2,3,4,5,6,7]
let myn1=arrTest.slice(1,3)// statrs form 1 index to 3rd index and just prints. it doesn't affect the main array
console.log(myn1)
console.log("A",arrTest)
// let str="bijay shah" just for revision
// console.log(str.slice(1,2))
let myn2=arrTest.splice(1,3)// starts from 1 and extracts 3 elements form the array. it deletes the element from the array as well
console.log(myn2)
console.log("B",arrTest)
