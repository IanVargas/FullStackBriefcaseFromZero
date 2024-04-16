const getData = async (id,data) => {
    const responses = await fetch (`https://api.restful-api.dev/objects/${id}`);
       if(responses.status === 404){
        console.log("404 User not found");
       }else{
        const responseJson = await responses.json();
        responseJson.data.address = data;
       
        const url = `https://api.restful-api.dev/objects/${id}`
        updateUserData(responseJson,url);
    }
        
};


async function updateUserData(data,url) {
    const trys = await fetch(url,{
        method : "Put",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers : {
            "Content-Type": "application/json",
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
        body : JSON.stringify(data),
    });
}




const data = 'new address'
const id = 'ff8081818e21ce2d018e8db0bac07c7c'
getData(id,data);