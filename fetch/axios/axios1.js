
const axios = require('axios');



const url = 'https://api.restful-api.dev/objects'

const getdata = async (url) => {
    const response = await axios.get(url);
    const noDataObject = response.data; //removed await, already an await above 
        noDataObject.forEach(element => {
                if(element.data == null){
                    console.log(element);
                }        
        });
        
};


getdata(url); 