// for loop
// print the number of fitst 10 numbers starting from 0.
let element
for (let i=0;i<10;i++){
     element= i;
    console.log(element);
      if(element==5){
        console.log("5 is the best number")
      }
}
console.log(element)


// nested loop
for (let i=0;i<=10;i++){
    console.log("outer loop value :"+i)
    for(let j=0;j<=10;j++){
      console.log("inner loop  value"+j)
    }
}
//multiply from 1 to 10.
for (let i=1;i<=10;i++){
     console.log("Table for :"+i)
    for(let j=1;j<=10;j++){
       console.log(i+"*"+j+"="+(i*j)) 
    }
}

//  array looops
let myArray=["bijay","abhay","amit"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
// throw undefined instead of array out of bound exception like java
// some keywords in loop
//break,continue

for (let index = 1; index < 20; index++) {
   
    if(index==6){
        console.log("detected 6")
        continue;
    }
    console.log('value of i is '+index)

}