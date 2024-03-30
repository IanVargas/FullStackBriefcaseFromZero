
const url = 'https://api.restful-api.dev/objects'

const getdata = async (url) => {
    const response = await fetch (url);
    let noDataObject = await response.json(); 
        noDataObject.forEach(element => {
                if(element.data == null){
                    console.log(element);
                }        
        });
        
};


getdata(url);