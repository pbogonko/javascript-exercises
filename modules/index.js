//The practice is to avoid callbacks and use promises to first read a file, then erite into it a new data. then append more data to the already existing data, then rename the file .
// 1. readFile
//2:write the file
// 2. append data
// 3: rename file
// try - catch
const fs=require('fs').promises
const path=require('path')
process.on("uncaughtException",err=>{
    console.log(`an error occurred:${err}`)
    
})


const file=async ()=>{
    try{
    readData=await fs.readFile(path.join(__dirname,'data.txt'),{encoding:"utf8"});
    console.log(readData)
    const writeData=await fs.writeFile(path.join(__dirname,'data1.txt'),"this text was written to the file");
    console.log("write successful")
    const append=await fs.appendFile(path.join(__dirname,'data1.txt'),`\n this text was appended to  the already existing data 1`);
    console.log("append successful")
    const rename=await fs.rename(path.join(__dirname,"data1.txt"),path.join(__dirname,"renamed.txt"))
}catch(error){
    console.error(`unexpected error occurred ${error.message}`)
}
}
file()