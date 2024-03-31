
const url = 'https://api.restful-api.dev/objects'

const data = {
    name : "Ian Vargass",
    data : {
        email : "ian.porras10@gmail.com",
        password: "123456",
        address: "costa rica"
    }
};


const putUserToApi = async (url,data) => { 

    const response = await fetch(url,{
    method : "Post",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers : {
        "Content-Type": "application/json",
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer", 
    body : JSON.stringify(data),
})
    const result = await response.json();

    console.log(result)
};





const test = putUserToApi(url,data);

console.log(test)