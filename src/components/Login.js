import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" ,name:""})

  const handleChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }
  
  

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email,password,name} = data
    if(email && password ){
      const fetchData = await fetch(`http://localhost:5000/api/loginuser`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      if (dataRes.success) {
        //save the auth toke to local storage and redirect
        localStorage.setItem('This', true)
        localStorage.setItem('Name', email)
        navigate("/");
  
      }
      if(!dataRes.success){
        alert("Enter correct Email or Password")
      }
      

     
      
      // if(dataRes.alert){
        
      //   setTimeout(() => {
      //     navigate("/")
      //   }, 500);
      // }

  
    }
    else{
        alert("Please Enter required fields")
    }
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='login-con'>
        <input placeholder='Email' type={"email"} id="name" name="email" value={data.email} onChange={handleChange} autoComplete='true' />
        <input placeholder='password' name="password" value={data.password} type='password' onChange={handleChange} />
        <button>Login</button>
        <p>new to car-factory? .. <Link style={{ color: "red" }} to="/register">register</Link></p>
      </form>
    </div>
  )
}
