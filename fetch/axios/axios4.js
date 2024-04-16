


const axios = require('axios');

const getData = async (id) => {
    const responses = await axios.get(`https://api.restful-api.dev/objects/${id}`).then(function(response){
        response.data.data.address = 'axios test';
        axios.put(`https://api.restful-api.dev/objects/${id}`,response.data)
        console.log(response.status);
    }).catch(function(error){
        console.log("404 User not found");
    }); // use another function don't use then .catch
    };



getData('ff8081818e21ce2d018e8db0bac07c7c');


//getData('ff8081818e21ce2d018e8db0bac07c7c');