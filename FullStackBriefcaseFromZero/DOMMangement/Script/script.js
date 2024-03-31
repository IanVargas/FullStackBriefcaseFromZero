
function addrowToButton(){
    const buttonAddItem = document.getElementById('add-button');
    const buttonRemoveItem = document.getElementById('remove-button');
    let counter = 0;
    const additemtable = () => {
        const newLine = document.createElement('tr');
        newLine.id = 'new_line'+ (++counter);
        const list= document.getElementById('list');
        list.appendChild(newLine);
        for (let i=0; i < 3; i++){
            let newColumn = document.createElement('td');
            newColumn.innerHTML = "another Item";
            const list2= document.getElementById(newLine.id);
            list2.appendChild(newColumn);
        }
    }
    const removeItem = () => {
        let table = document.querySelector("table");
        let numberOfRows = table.rows.length;
        if(numberOfRows >= 0){
            table.deleteRow(numberOfRows-1);
            console.log(rowId);
    }
} /*   if(numberOfRows >= 0){
            row.deleteRow(numberOfRows-1);
        }

    }*/
        //row.deleteRow(row.length());
        //table.removeChild(newColumn);
    buttonAddItem.addEventListener('click',additemtable);
    buttonRemoveItem.addEventListener('click',removeItem);  
    //buttonAddItem.onclick = counter++;
}
function menuActive(){
let buttonNav = document.querySelectorAll('.nav__button');
let actualWindow = window.location.pathname;
//console.log(actualWindow);
buttonNav.forEach(buttonNav => {
    const hrefActual = buttonNav.getAttribute('href');
    //console.log(hrefActual);
    if(actualWindow.includes(hrefActual)){
        buttonNav.classList.add('active');
    }
    /*sections.addEventListener('click', () =>
    {
    document.querySelector('.active')?.classList.remove('active');
     sections.classList.add('active');   
    });
    */  //this is for switching when an user clicks it can be use when moving trough sections
}); 
}
function showResultOfInputs(name,lastname){
    ///const buttonToSubmit = document.getElementById('submit-button');
    let divToShowData = document.getElementById('outputnames');
    const nameInput = document.getElementById('first-name');  
    const lastInput = document.getElementById('last-name');  
    if (name != '' || lastname != '')  { 
    let showData = ` Welcome ${name} ${lastname} It's a pleasure to met you!`;
    typingEffect(divToShowData,showData); // it sents the string for they typing effect
    nameInput.value = '';
    lastInput.value = '';
    }else{
        
    }
}
function typingEffect(divToShowData, text, i = 0 ){
    divToShowData.textContent += text[i]; //it goes 1 by 1 on the string that it gets sent
    console.log(text[i]);
    if(i === 0){
        divToShowData.textContent =""; // if a new string is submited it cleans the console
    }
    if(i === text.length-1){
        return; //stops before undefined
    }
    setTimeout(() => typingEffect(divToShowData,text, i+1),30); //set the recursion time out 

    
}


function employeeFormIdToShow(value){
    const valueRadioButton = value;
    const inputEmployee = document.getElementById("employeeid");
    const labelInput = document.getElementById("employeelabel");
    console.log(valueRadioButton);
    if(valueRadioButton === "Yes" ){
        labelInput.style.visibility = "visible";
        inputEmployee.style.visibility= "visible";
    }else{
        labelInput.style.visibility = "hidden";
        inputEmployee.style.visibility= "hidden";
    }


}

menuActive();
addrowToButton();

function letterFinder(word, match){
     for (let i = 0; i < words.length;i++){
        if (match === word[i]){
            console.log(`found the ${match} at ${i}`);
        }else {
            console.log('---No match found at', i);
        }
     }
}


letterFinder("test",t);

