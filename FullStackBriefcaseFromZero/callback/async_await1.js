

async function apiToData(id){
    const apiCallResult = await fetch(`https://reqres.in/api/users/${id}`).then((data) => data.json());
    return apiCallResult;
    //console.log(apiCallResult)
}


apiToData(2).then((user) => console.log(user)); //async functions are made for

