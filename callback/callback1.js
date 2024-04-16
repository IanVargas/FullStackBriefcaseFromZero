

const isAnEvenNumber = () => {
    console.log("The number is even!");
}

const isAnOddNumber = () => {
    console.log("The number is odd!");
}

function oddOrEven(numberToReview,vonIsAnOddNumber,onIsAnEenNumber){ //cambiar nombre parametros 
    if (typeof(numberToReview = 'number')){  
        if(numberToReview % 2 === 0){
            onIsAnOddNumber();
        
        }else{
            onIsAnOddNumber();
        }
    }else{
        console.log("parameter should be a number");
    }   
}


oddOrEven(4 , isAnEvenNumber, isAnOddNumber);