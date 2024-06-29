
function reverseNumber(number){

    let numberToList = String(number).split("").map((number) => {
        return Number(number)
    })
    numberToList = numberToList.reverse()
    const reversedNumber = numberToList.join("")
    return reversedNumber;
}


console.log(reverseNumber(123456))


