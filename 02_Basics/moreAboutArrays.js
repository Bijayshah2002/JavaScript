const heroes=["thor","Ironman","Spiderman"]
const dcHeroes=["superman","flash","batman"]
// heroes.push(dcHeroes)
console.log(heroes)
let allHeroes = heroes.concat(dcHeroes)
console.log(allHeroes)
const all_new_heroes=[...heroes,...dcHeroes]
console.log(all_new_heroes)
const another_array=[2,3,[3,45,5],23,[34,[4,3],55]]
let real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
// some other functions are Array.isArray("bijay shah")
// Array.from("Bijay shah") make array of the sting bijay shah
// Array.from({name:"bijay shah"})

let score =1
let score1 =2
let score2 =3
console.log(Array.of(score,score1,score2))
let name=Array.from("bijay shah")
Array.from({
    names:"bijay shah"
    
})
console.log(name[2])
// console.log(names)
