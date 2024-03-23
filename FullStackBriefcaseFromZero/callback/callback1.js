

const isAnEvenNumber = () => {
    console.log("The number is even!");
}

const isAnOddNumber = () => {
    console.log("The number is odd!");
}

function oddOrEven(numberToReview,isAnOddNumber,isAnEvenNumber){
    if (typeof(numberToReview = 'number')){  
        if(numberToReview % 2 === 0){
            isAnEvenNumber();
        }else{
            isAnOddNumber();
        }
    }else{
        console.log("parameter should be a number");
    }   
}


oddOrEven(4 , isAnEvenNumber, isAnOddNumber);