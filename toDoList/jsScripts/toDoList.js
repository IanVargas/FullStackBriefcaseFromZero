const userLoggedId = document.cookie.split(";").find(row => row.startsWith("sessionToken="))?.split("=")[1];
if(userLoggedId === undefined ){
    location.href = "./main.html"
}else{
    recollectToDoList(userLoggedId);
}
const logOutButton = document.getElementById('log-out').addEventListener("click",logOut);
const addButton = document.getElementById('add-task').addEventListener("click",addTask)


async function getTodoListFromApi(userLoggedId){
    const toDoListFormUser = await axios.get(`https://api.restful-api.dev/objects/${userLoggedId}`);
    return toDoListFormUser; 
}
async function recollectToDoList(userLoggedId){
    const listtodo = document.getElementById('to-do-list')
    console.log(listtodo)
    let toDoListFormUser = await getTodoListFromApi(userLoggedId);
        toDoListFormUser.data.data.toDoTasks.forEach(task => {
            let new_input = document.createElement('li');
            let btnDlt = document.createElement('button');
             btnDlt.textContent = "x";
            btnDlt.onclick = function() {
                new_input.classList.add("removed");
                setTimeout(() => {
                    new_input.remove();
                    //console.log(toDoListFormUser.data.data.toDoTasks)
                    completedTask(toDoListFormUser,task.task); 
                },
                1020);
                //new_input.remove();
                //console.log(toDoListFormUser.data.data.toDoTasks)
                //completedTask(toDoListFormUser,task.task);// Remove the parent <li> element when the button is clicked
            };
            console.log(task.task)
            new_input.innerHTML = task.task;
            console.log(new_input)
            listtodo.appendChild(new_input);
            new_input.appendChild(btnDlt);
        });
}
async function completedTask(toDoListFormUser,task){
   toDoListFormUser.data.data.toDoTasks = toDoListFormUser.data.data.toDoTasks.filter((obj) => obj.task != task);
   toDoListFormUser.data.data.completedTask.push({
        task : task 
   }) 
   await axios.put(`https://api.restful-api.dev/objects/${userLoggedId}`,toDoListFormUser.data)
}

function addTask(){
 const taskToAdd = document.getElementById('new-task').value
 if(taskToAdd!=""){
 const listtodo = document.getElementById('to-do-list')
 let new_input = document.createElement('li');
 let btnDlt = document.createElement('button');
 btnDlt.textContent = "x";
 btnDlt.onclick = async function() {
    new_input.classList.add("removed");
    const toDoListFormUser = await getTodoListFromApi(userLoggedId); 
    if(taskToAdd!=""){
    new_input.remove();
                //console.log(toDoListFormUser.data.data.toDoTasks)
    completedTask(toDoListFormUser,taskToAdd); // Remove the parent <li> element when the button is clicked
    }};
 new_input.innerHTML = taskToAdd;
 listtodo.appendChild(new_input);
 updateApi(taskToAdd);
 new_input.appendChild(btnDlt);  
}

}
async function updateApi(taskToAdd){
    const toDoListFormUser = await getTodoListFromApi(userLoggedId);
    toDoListFormUser.data.data.toDoTasks.push(
        {
            task : taskToAdd
        });
   await axios.put(`https://api.restful-api.dev/objects/${userLoggedId}`,toDoListFormUser.data); 
    //recollectToDoList(userLoggedId);
}


function logOut(){
    //await autoSave();
    document.cookie = "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=./;"
    location.href = "./main.html"
    console.log('User logged out');
}


