// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

async function getcontent(path){
    return new Promise((res,rej)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(!err)
            {   
                console.log("hey1")
                res(data);
            }
            else
            console.log(err);
        })
    })
}
function write(path,data){
    return new Promise((res,rej)=>{
        fs.writeFile(path,data,"utf-8",()=>{
            console.log("done");
            res();
        })
    })
}
async function main()
{
    let path = "./test.txt";
    let text =await getcontent(path);
    text = text.replace(/\s\s+/g," ");
    await write(path,text);  
    console.log("hey 2");
    
}
main();