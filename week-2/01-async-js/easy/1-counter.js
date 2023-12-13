//  ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
 
let i =30 ; 

function counter(){
    if(i<0)
    clearInterval(c)
}
let c = setInterval(()=>{
    console.log(i);
    i--;
    counter();
},1000)