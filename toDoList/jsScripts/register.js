

const url = "https://api.restful-api.dev/objects/ff8081818ead0ebb018ec5cdcb1e518d";
const register_button = document.getElementById("register-button");
register_button.addEventListener("click", () => {
  try{
		console.log("clicked");
  	const username = document.getElementById("user-name").value;
  	let password = document.getElementById("user-password").value;
  	if(username,password){
			password = securePasswordHash(password);
			checkDatabaseUsers(username, password);
		}
	}catch(Error){
		console.log("error");
	}

});
function securePasswordHash(passwordFromUser){
	const securedPassword = new jsSHA("SHA-1","TEXT",{ encoding: "UTF8"})
	securedPassword.update(passwordFromUser)
	const hashedPassword = securedPassword.getHash("HEX") 
	return hashedPassword;
}
async function recolectUsersApi() {
  const dataFromApi = await axios.get(url);
  return dataFromApi;
}
async function checkDatabaseUsers(newUsername, newPassword) {
	try {
		let userExist = false;
    let userDataRecolectedFromApi = await recolectUsersApi();
		 userDataRecolectedFromApi.data.data.users.forEach(element => {
					if (newUsername === element.username){
							userExist = true;
							}	
		 });
		 if(userExist){
			//Put logic to show message that user exists
		 }else{
			registerNewUSer(newUsername,newPassword,userDataRecolectedFromApi);
		 }
} catch(error){
}
}
async function registerNewUSer(newUsername,newPassword,userDataRecolectedFromApi){
	const dataDefault ={ data : {
			toDoTasks : [
			],
			completedTask:[]
		}
	}
	try{
	const uploadNewUSer =  await axios.post('https://api.restful-api.dev/objects',dataDefault);
	userDataRecolectedFromApi.data.data.users.push({
		userId : uploadNewUSer.data.id,
		username : newUsername,
		password : newPassword
	})
	updateBaseUsersApi(userDataRecolectedFromApi);
	document.cookie = `sessionToken=${uploadNewUSer.data.id}`
	window.location.replace('./toDoList.html');
	}catch(error){
		
	}
}	
async function updateBaseUsersApi(userDataRecolectedFromApi){
	try{
		await axios.put(url,userDataRecolectedFromApi.data);
	}catch(error){
	}
}

