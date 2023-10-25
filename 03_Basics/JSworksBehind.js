// two types (execution context and call stacks)
// JS executes in two phases
// whenever we write code there must be made a global execution context
//each environment has their own execution context (node deno browser)
// this all executes on thread

// Global execution context and function execution context
// two phases to run any js code(memory creation phase,execution phase)
// whenever we decleare variables then memory is allocated not execution is done

const val1=2
const val2=3
function mySum(num1,num2){
    let total=num1+num2   
    return total
}
let result1=(val1,val2)
let result2=(1,2)
/* 1.Global execution 
       1.memory phase
          val1=>undefined
          val2=>undefined
          mySum=>defination
          result1=>undefined
          result2=>undefined
       2.Execution phase
          val1=>2
          val2=>3
          mySum=>[new variable environment+execution thread] a box created
                 1.memory phase
                   val1=>undefined
                   val2=>undefined
                   total=>undefined
                 2.num1=>1
                   num2=>2
                   total=>3  return to parent/global execution context
                   result2=>3
                   after all these process the box also gets deleted
          for another function i.e. mySum(2,3)
                    same process executes as shown in the box

                   */


// 2.call stack
                    /* 
                      puts data/functions in the stack
                      works on LIFO process that is last in first out
                      
                      */