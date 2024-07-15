import React from "react";

function Login()
{
    return( 
        <>
         <form>
            <div>
            <label>Username</label>
            <input type="text" placeholder="Please Input your username"/>
           
            </div>
            <div>
            <label>Password</label>
            <input type="text" placeholder="Please Input your Password"/>
            
            </div>
         </form>
        </>
        
    )
}

export  default Login;