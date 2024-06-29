import { useState } from "react";


function ListGroup(){ 
    let items = ["new york", "San Francisco", "utah"];

    //let selectedIndex = 0;
    //hook tab into bult-in fuctions
    const [selectedIndex,setSelectedIndex] = useState(-1);  
  
   

    //const getMessage = items.length === 0 ? <p>not found</p> : null ;
    

    return (
     //<> is the same as use <fragment />
      <>    
        <h1>Hola</h1>
        {items.length === 0 && <p>Not Founds</p>}
        <ul className="list-group">
            {items.map((item,index) => (
              <li key={item} 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                onClick={() => {setSelectedIndex(index)}} > {item} </li>))}
          </ul>
      </>
       )}

export default ListGroup;