// function nested
function one(){
    const username= "bijay shah"
    console.log(username)
    function innerOne(){
        const website="github"
        console.log(website)
        console.log(username)// can use like inheritence or parental property
    }
    // console.log(website)
    innerOne()
}
one()

// conditional nested
if(true){
    const username="bijay shah"
    if(username=="bijay shah"){
        const greet="hello "
        console.log(greet+username)
    }
    // console.log(greet)// cant run because greet scope is not here

}

//********* interesting ************ */
console.log(addone(3))
function addone(num){
    return num+1
}

console.log(addTwo(6))// cant print this is mini-hoisting
const addTwo =function(num){
    return num+2
}
// console.log(addTwo(5))