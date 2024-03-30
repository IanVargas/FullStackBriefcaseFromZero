/*
Cree cuatro promesas, donde cada una resuelve a una de las palabras de la lista ["very", "dogs", "cute", "are"] respectivamente, en el mismo orden. 
Utilice la cobinación de la función setTimeout y Promse.all() para obtener la salida "Dogs are very cute" , 
sin modificar el orden de la lista manualmente o mediante un sort.m
*/


const promiseWordCheck = (wordNumber) => {
    const dataArray = ["very", "dogs", "cute", "are"];
    const wordToReturn = dataArray[wordNumber];
        return wordToReturn;   
}


promise1 = promiseWordCheck(1);
promise2 = promiseWordCheck(3);
promise3 = promiseWordCheck(0);
promise4 = promiseWordCheck(2); 

 Promise.all([promise1,promise2,promise3,promise4]).then((resolve) => {
    console.log(String(resolve));
})