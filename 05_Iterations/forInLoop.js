
// trying to iterate objects using for in loop
const myObj={
    js:"java Script",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for(const k in myObj){
    console.log(k)
    console.log(myObj[k])
}

// trying to iterate array using for in loop.
const programming=["js","java","python","php","c++"]
for(const key in programming){
    console.log(key)// just return index.
    // therefore
    console.log(programming[key])
}