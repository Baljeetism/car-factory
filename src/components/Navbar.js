import React from 'react'
import { Link, useNavigate } from 'react-router-dom'





function Navbar() {

    
    const navigate=useNavigate()
    function handleClick(){
        localStorage.removeItem('This')
        navigate("/")
    }
   const name = localStorage.getItem("Name")
   

    return (
        <div className='n-con' >
            
            <div className='navbar'>
                <Link style={{textDecoration: 'none'}} to={"/"}><h1>car-factory</h1></Link>
                
                
            </div>
            {(localStorage.getItem("This")) ?
            <div className='navbar'>
                
                    
               
                <h4 className='card'>HEY, {name}</h4>
                <button onClick={handleClick}>Logout</button>
                
            </div>:""}
            {(!localStorage.getItem("This")) ?
            <div>
                <div className='navbar'>
                <Link style={{textDecoration: 'none'}} to={"/about"}><h1>about</h1></Link>
                
                <Link style={{textDecoration: 'none'}} to="/login"><h1>login</h1></Link>
                
                
               
                
                
            </div>
            </div>:""}
            

            




        </div>
    )
}
export default Navbar;
