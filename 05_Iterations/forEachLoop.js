const coding=["js","ruby","java","python","cpp"]
coding.forEach(  function (value) {
    console.log(value)
})
// coding.forEach( (item)=>{
//     console.log(item)
// })
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
})

const myCoding=[
    {
        name:"js",
        fileName:"desktop_js"  
    },
    {
        name:"py",
        fileName:"desktop_py"  
    },
    {
        name:"cpp",
        fileName:"desktop_cpp"  
    }
]

myCoding.forEach((item)=>{
    console.log(item["fileName"])
})