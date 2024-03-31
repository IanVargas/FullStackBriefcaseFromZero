/*
Realice el mismo ejercicio anterior, 
pero con el URL https://reqres.in/api/users/23 para generar un error. 
Realice el manejo de error adecuado e imprima un mensaje de error indicando que el usuario no se encontró.
*/




const userCallToApi = async (id) => {
    try{
        let userData = await fetch(`https://reqres.in/api/users/${id}`);
        userData = await userData.json()
        if(Object.keys(userData).length!== 0)
            return userData;
        else
            return err;
    }catch(err){
        console.error("user doesn't exist");
    }
}





const user = async(id) => {
        const userInfo = await userCallToApi(id);
        console.log(userInfo);
}


user(2);



