const url = "https://api.restful-api.dev/objects/ff8081818ead0ebb018ec5cdcb1e518d";
const login_button = document.getElementById("login-button");
login_button.addEventListener('click', () => {
    const username = document.getElementById('user-name').value;
    let password = document.getElementById('user-password').value;
    password = hashPassword(password);
    console.log(password)
    if(username,password)
        checkCredentialsUser(username,password);
});
function hashPassword(password){
    const hashedInstance = new jsSHA("SHA-1","TEXT", {encoding : 'UTF8'});
    hashedInstance.update(password);
    const hashedPassword = hashedInstance.getHash('HEX');
    return hashedPassword;
};
async function checkCredentialsUser(username,password){
    const userDataTocheckCredentials = await getDataApi();
    userDataTocheckCredentials.data.data.users.forEach(user => {
            if(user.username === username){
                console.log('user found');
                if(user.password === password){
                    document.cookie = `sessionToken=${user.userId} `
                    const cookieValue = document.cookie.split(";").find(row => row.startsWith("sessionToken="))?.split("=")[1]; //divides the cookie and gets it to the system, worth because in this case it helps
                    location.href = "./toDoList.html"
                }else{
                    console.log('incorrect password')
                }
            }
    });
    //console.log(userDataTocheckCredentials.data.data)
}
async function getDataApi(){
    const usersDataBase = await axios.get(url);
    return usersDataBase;
}