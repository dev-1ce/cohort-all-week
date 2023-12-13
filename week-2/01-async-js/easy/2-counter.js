// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let i = 0;
function main(limit)
{
    if(i<limit){
        console.log(i);
        setTimeout(()=>{
            i++;
            main(limit);
        },1000)
    }
}
main(30);





































































