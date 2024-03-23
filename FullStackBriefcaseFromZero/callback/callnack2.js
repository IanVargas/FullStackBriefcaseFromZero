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
        dataLog('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file1.txt',(err,firstList) =>{

            dataLog('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file2.txt',(err,secondList) => {



                let secretMessageWord = firstList.filter(word => secondList.includes(word));
                console.log(secretMessageWord);

            });
        });
    } catch (err) {
        console.error(err);
    }
}


//const firstList = fs.readFile('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file1.txt','utf-8',dataLog);
//const secondList = fs.readFile('C:\\Users\\ianpo\\Documents\\FullStack\\FullStackBriefcaseFromZero\\callback\\file2.txt','utf-8',dataLog);
//console.log(secretMessage(firstList,secondList));


secretMessage();
