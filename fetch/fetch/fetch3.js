const url = 'https://api.restful-api.dev/objects'

const getData = async (id) => {
    const responses = await fetch (`https://api.restful-api.dev/objects/${id}`);
       if(responses.status === 404){
        console.log("404 User not found");
       }else{
        const responsejson = await responses.json();
        console.log(responsejson);
    }
        
};



getData('2121sa');





