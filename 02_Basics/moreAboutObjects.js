// making objects using constructor 

const skypeUser = new Object()
console.log(skypeUser)

const skypeUser2 ={}
console.log(skypeUser2) // both returns {} same output

// adding values
skypeUser.name="bijay shah"
skypeUser.Id=1
skypeUser.country="Nepal"
console.log(skypeUser)

// another objects
 
const regularUser={
    email:"bijay@gmail.com",
    fullName:{
        userFullName:{
            firstName:"bijay",
            lastName:"shah"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullName.userFullName.lastName)//nested objects

// merging two objects like we used to do in arrays

const obj1={
    1:"a",
    2:"b"

}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2}
console.log(obj3)// same problem like array that is nested objects
// we have another functoin to merge to objects

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
 
// another method like array
const obj5={...obj1,...obj2}
console.log(obj5)

// to find the keys of all objects
// these all are stored in array
console.log(Object.keys(obj5))
// similarly
console.log(Object.values(obj5))
console.log(Object.entries(obj5))
console.log(obj5.hasOwnProperty('1'))
