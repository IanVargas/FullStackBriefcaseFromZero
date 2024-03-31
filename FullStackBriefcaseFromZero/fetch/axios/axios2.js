


const axios = require('axios');
const url = 'https://api.restful-api.dev/objects'

const data = {
    name : "Ian Vargass2",
    data : {
        email : "ian.porras10@gmail.com2",
        password: "1234562",
        address: "costa rica2"
    }
};

async function putUserAxios(url,data){
  const result = await  axios.post(url,data);
  console.log(result.data);
}

putUserAxios(url,data);