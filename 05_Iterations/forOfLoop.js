// // for of loop
// recalling objects in array.

// let obj1,obj2,obj3;
// let students=[
//     {
//         "name":"bijay",
//         age:21
//     },
//     {
//         "name":"amit",
//         age:22
//     },
    
//     {
//         name:"badal",
//         age:23
//     }
// ]
// // console.log(students[obj1['name']])
// console.log(students[0]["name"])

const myArr=[1,2,3,4,5]
for (const i of myArr) {
    console.log(i)
}

const greeting="hello world"
for(const g of greeting){
    if(g==" ")
   { continue}
    console.log('Each char is '+g)
}
for(i=0;i<greeting.length;i++){
    console.log(greeting[i])
}

// maps
// all values are unique, not duplicate.
// will further talk later.
const map=new Map()
map.set('ind',"India")
map.set('nep',"Nepal")
map.set('usa',"United State of America")
map.set('ind',"Indonesia")
console.log(map)// will not print  the first one india and overrides indonesia on ind  because it only executes unique value.
for(const [key,value] of map){
    console.log(key+"="+value)
}

// for of loop in obj
const myObj={
    game1:'gta',
    game2:'sanAnd'
}
// for of loop works in maps but not in objects.
for(const [key,value] of myObj){
    console.log(key+"="+value)
}