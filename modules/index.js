//The practice is to avoid callbacks and use promises to first read a file, then erite into it a new data. then append more data to the already existing data, then rename the file .
// 1. readFile
//2:write the file
// 2. append data
// 3: rename file
// try - catch






const fs=require('fs').promises
const path=require('path')
// process.on("uncaughtException",err=>{
//     console.log(`an error occurred:${err}`)
//     process.exit(1);
    
// })
async function readFile(){
        try{
            const readData=await fs.readFile(path.join(__dirname,'data.txt'),{encoding:"utf8"});
            console.log(readData)

        }catch(err){
            console.error('an error occurred',err.message)
        }
}
async function writeFile(){
    try{
        await fs.writeFile(path.join(__dirname,'data1.txt'),"when this file is run this  text is written to the file");
        console.log("write successful")

    }catch(err){
        console.log("unable to write to the file, due to",err.message);

    }
    
}
async function append(){
    try{
        await fs.appendFile(path.join(__dirname,'data1.txt'),`\nwhen this function is run this  text is appended to data1.txt to the file`);
        console.log("append successful")

    }catch(err){
        console.log("unable to append file, due to",err.message);

    }
    
}
async function rename(){
    try{
        await fs.rename(path.join(__dirname,'data1.txt'),(__dirname,'renamed.txt'));
        console.log("rename successful")

    }catch(err){
        console.log("unable to write to the file, due to",err.message);

    }
    
}
 function fileops(){
    setTimeout(()=>{ readFile()},500)
    setTimeout(()=>{   writeFile()},1000)
    setTimeout(()=>{   append()},1500)
    setTimeout(()=>{   rename()},2000)
      
   
}
fileops()
// const fs=require('fs').promises
// const path=require('path')
// process.on("uncaughtException",err=>{
//     console.log(`an error occurred:${err}`)
    
// })


// const file=async ()=>{
//     try{
//     readData=await fs.readFile(path.join(__dirname,'data.txt'),{encoding:"utf8"});
//     console.log(readData)
//     const writeData=await fs.writeFile(path.join(__dirname,'data1.txt'),"this text was written to the file");
//     console.log("write successful")
//     const append=await fs.appendFile(path.join(__dirname,'data1.txt'),`\n this text was appended to  the already existing data 1`);
//     console.log("append successful")
//     const rename=await fs.rename(path.join(__dirname,"data1.txt"),path.join(__dirname,"renamed.txt"))
// }catch(error){
//     console.error(`unexpected error occurred ${error.message}`)
// }
// }
// file()