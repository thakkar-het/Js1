/*
today we'll learn about how the code in js works and gets executed
so the topic is called javascript execution context

whenever the code is given to be executed then WITHOUT THINKING we'll always say that there becomes an global execution context which will be refered in "this" variable, in node it is stored an an empty obj in browser as window obj
in javascript everything is single threaded and everything works as a process here

we also have one other type of execution context which is called function EC
here our code is broken down into 2 phases :-
1.Memory creation phase, 2.Execution phase

let's understand both of this with a diagram flow of this code:-

{
    let val1 = 10;
    let val2 = 5;
    function addnums(num1, num2) 
    {
        let total = num1 + num2;
        return total;
    }
    let result1 = addnums(val1, val2);
    let result2 = addnums(3, 4;)
} //diagram in another pair of long comments

there is also an execution context named eval EC which we are not going to use anywhere right now
*/

/*
(1) Global Execution is formed and refered to  "this"
(2) Memory phase
        |
        |
        v
    val1 -> undefined
    val2 -> undefined
    addnums -> definition
    result1 -> undefined
    result2 -> undefined
(3) Execution Phase
        |
        |
        v
    val1 -> 10
    val2 -> 5
    (when coming to line 17 to 21 execution phase does nothing but when called on line 22 and 23 the following occurs in it)
    result1 -> addnums ->  _____________
                          |new variable |
                          | environment |
                          |     +       | -> new Global EC(and again the memory phase and execution phase runs (the number of times we call a fxn this new sandbox gets made for us))
                          |  Execution  |
                          |  thread     |
                           -------------
                                    |------------------------------------|
                                    v                                    v
                                Memory phase                      Execution phase 
                                    |                                   |
                                    |                                   |
                                    v                                   v
                                val1 -> undefined                     val1 -> 10
                                val2 -> undefined                     val2 -> 5
                                total -> undefined                    num1 -> val1 -> 10
                                num1 -> undefined                     num2 -> val2 -> 5 
                                num2 -> undefined                     total -> 15 (this will be returned to original EC i.e (1) here)

*** MOST IMP when this both phases are completed the new sandbox i.e EC made here on calling the function is deleted written in the square box
and in original execution phase i.e (3) here will have result1 -> 15

again for result2 whole thing repeats and we'll have result2 -> 12
*/

// now let's do a bit of call stack

function one()
{
    console.log("one");
    two();
}
function two()
{
    console.log("two");
    three();
}
function three()
{
    console.log("three");
}
one();
two();
three();
// output is one two three two three three
/*
this is exactly how the call stack works 
it follows LIFO principle last in first out 
so in global EC when first 1 is called then 2 is called in it and 3 is called in 2 then the sack becomes EC->1->2->3 then 3 comes out first then 2 and then 1
inn the same way in 2 3
and 3 at the last
*/

// :)