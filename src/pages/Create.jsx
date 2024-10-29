import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


function Create() {
  const [values,setValues]=useState({
    name: '',
    email: '',
    phone: ''
})


const navigate = useNavigate();

const handleSubmit = (event)=>{
  event.preventDefault();
  if(values.name && values.email && values.phone){
    axios.post('http://localhost:3000/create/',values)
    .then(res => {
    console.log(res);
    navigate('/')
    alert("Submitted")
    
  })
  .catch(err => console.log(err));
  }else{
    alert("Enter valid input")
  }
  
}
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center ' style={{background: "black"}}>
      <div className=' border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-secondary d-flex justify-content-center align-items-center h4'>ADD NEW MEMBERSHIP</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">NAME :</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e=>setValues({...values,name:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="birth">Date Of Birth :</label>
            <input type="text" name='birth' className='form-control' placeholder='Enter u r birth'
            onChange={e=>setValues({...values,email:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="name">PHONE:</label>
            <input type="number" name='phone' className='form-control' placeholder='Enter Number'
            onChange={e=>setValues({...values,phone:e.target.value})}/>

          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to="/" className='btn btn-primary ' >Back</Link>
            <Link TO='/view' className='btn btn-success ms-5 '>Submit</Link>
          </div>
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Create
