import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from './Navbar'


export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "", location: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value,
            };
        });
    };
    const { name, email, password, location } = data;
    const handleSubmit= async(e)=> {
        e.preventDefault();
        const fetchData= await fetch(`http://localhost:5000/api/createUser`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        const sentdata= await fetchData.json();
        // alert(sentdata.message);
        // console.log(sentdata);
        if(sentdata){
            navigate('/login');
        }
        
        
    }

    return (
        <div>
            <Navbar />
            <div >
                <form className='login-con' onSubmit={handleSubmit}>
                    <input placeholder='Name' type={"text"} id="name" name="name" value={data.name} onChange={handleChange} />
                    <input placeholder='email address' value={data.email} name="email" type={'email'} onChange={handleChange} />
                    <input placeholder='password' name="password" value={data.password} type='password' onChange={handleChange} />
                    <input placeholder='location' name="location" value={data.location} type='text' onChange={handleChange} />
                    <button>create account</button>
                     <p>already a menber .. <Link style={{ color: "red" }} to="/login">login</Link></p>
                </form>

               
            </div>
        </div>
    )
}
