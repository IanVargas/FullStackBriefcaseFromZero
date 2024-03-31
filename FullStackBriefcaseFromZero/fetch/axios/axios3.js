const url = 'https://api.restful-api.dev/objects'
const axios = require('axios');
const getData = async (id) => {
    const responses = await axios.get(`https://api.restful-api.dev/objects/${id}`).then(function(response){
        response = response.data;
        console.log(response);
    }).catch(function(error){
        console.log("404 User not found");
    });
    };



getData('2');

