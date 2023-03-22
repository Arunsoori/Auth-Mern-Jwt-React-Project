import React,{useEffect,useState}from 'react'
import {Link,useNavigate} from "react-router-dom"
// import { useLocation } from 'react-router-dom';
import  {ToastContainer,toast} from "react-toastify"
import axios from "axios"
import { useSelector } from 'react-redux';




export default function Edit(props) {
  const userdetails = useSelector((state) => state.user)
  const navigate =useNavigate()
  
  const [values,setValues] = useState({
    id:"",
    email:"",
    name:"",
  })





const generateError =(err)=>
toast.error(err,{
  position :"bottom-right",
})
console.log(userdetails);
// function handleClick() {
//   if (location.pathname === '/admin') {
//     console.log("pipipipipi");
//     navigate('/admin');
//   } else {
//     navigate('/');
//   }
// } 
useEffect(()=>{
        setValues({...values,id:userdetails.id,name:userdetails.name,email:userdetails.email})
        
    },[])

    function edit(e){
       
      setValues({...values,[e.target.name]:e.target.value})
}


  const handleSubmit = async(e)=>{
    e.preventDefault()
    
      const res= await axios.post("http://localhost:4000/admin/edit",values)
     const data = res.data
      
        if(data.status){
          toast.success(data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          
        })
        


        
          navigate('/admin')

        }
      }
   
  

  return (
    <div className="container"  >
      <h2>Edit</h2>
      <form onSubmit={(e)=>handleSubmit(e)} >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name"  value={values.name} onChange={(e)=>edit(e)}  />
       </div>
       <div>
        <label htmlFor="mail">Email</label>
        <input type="email" name="email" value={values.email} placeholder="Email" onChange={(e)=>edit(e)} />
       </div>
       
       <button type="submit"> Submit</button>
       <span>
        Already have an acount? <Link to="/login">Login</Link>
       </span>


      </form>
      <ToastContainer />
    </div>
  )
}
