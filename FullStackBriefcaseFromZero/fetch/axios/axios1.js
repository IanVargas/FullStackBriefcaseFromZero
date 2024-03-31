
const axios = require('axios');



const url = 'https://api.restful-api.dev/objects'

const getdata = async (url) => {
    const response = await axios.get(url);
    let noDataObject = await response.data; 
        noDataObject.forEach(element => {
                if(element.data == null){
                    console.log(element);
                }        
        });
        
};


getdata(url);