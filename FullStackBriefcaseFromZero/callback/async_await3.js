const submitButton = document.getElementById('seach-Button');
let iduser = 
submitButton.addEventListener('click',() => {
    const userId = document.getElementById('userid').value;
    console.log(userId);
    searchUserInformation(userId);
});


async function searchUserInformation(idFromUser){
    try{
        console.log('searching for user')
        let userInformation = await fetch(`https://reqres.in/api/users/${idFromUser}`);
        userInformation = await userInformation.json();
        console.log(userInformation)
        displayUserInformation(userInformation)
        
    }catch(err){
        const outputToShow = document.getElementById('output');
        outputToShow.textContent = "Error user not found";
    }

}

function displayUserInformation(userInformation){
    const outputToShow = document.getElementById('output');
    const data = {
        name : userInformation.data.first_name,
        lastName : userInformation.data.last_name,
        email : userInformation.data.email
        
    }
    outputToShow.innerHTML = `<br>Name: ${data.name} <br> Last Name: ${data.lastName} <br> Email: ${data.email}`;
}
