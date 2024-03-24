const { timeStamp } = require('console');
let fs = require('fs');



function dataLog(filePath, cb) {
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err){
            console.log(err)
            
        }else{
            cb(null,data.split(/\r?\n/));
        }

    } );
}

function secretMessage(){
    try{
        dataLog('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file1.txt',(err,firstList) =>{ //we create an arrow function because is a callback so whave an awaity

            dataLog('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file2.txt',(err,secondList) => { //create a second arrow function so we make sure no list is undefined
                let secretMessageWord = firstList.filter(word => secondList.includes(word)); //we use filter and includes so it shows the messaage, another option was to use lists and foreach and === or foreach and includes
                console.log(secretMessageWord);
            });
        });
    } catch (err) {
        console.error(err);
    }
}

secretMessage();
