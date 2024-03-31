const colorList = ['red','blue','green','yellow','cyan','pink'];
const buttonToChangeColor = document.getElementById('buttonChangeColor');


function changeButtonColor(){
    let randomColor = Math.floor((Math.random() * 6));
    return randomColor;
}


function changeColor(){
    const paragraph = document.getElementById('paragraph');
    let colorToUse = colorList[changeButtonColor()];
    if(colorToUse == 'blue'){
        paragraph.style.cssText = `color:white; background-color:${colorToUse}`;
    }
    else{ 
        paragraph.style.cssText = `color:black; background-color:${colorToUse}`;
    }

}

buttonToChangeColor.addEventListener('click',changeColor);




