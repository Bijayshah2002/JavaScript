// Immediately Invoked Function Expression(IIFE)

function myFunction1(){
console.log("hello world  simple funcntion!")
}
myFunction1();


(function myFunction2(){// this is called named IIFE
    console.log("hello world! iife");
    })()    ;
    // iife executes at the very moment
    // and it is done to avoid the pollutions caused from global scopes

    (
        ()=>{// unnamed IIFE
            console.log("hello arrow functions");
        })();

        // most important use semicolon to use multiple iife or functions along with it

        (
            (name)=>{// parameter IIFE
                console.log(name+ " hello arrow functions");
            })("bijay")
    