import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='vh-100' style={{background:"black"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12'>
        <img className='me-5 p-5' src="https://rs-menus-api.roocdn.com/images/ab384d1c-f9d1-4c5b-8eb7-b8fa2eef5fa2/image.jpeg" width='120%' height='140%' alt="" />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
          <h1 style={{color :'white'}} className='p-5'>The Sweetest Affair</h1>
        <Link to='/create' className='btn btn-info px-4 '>Create MemberShip</Link>
        <Link to='/home' className='btn btn-info mt-5 px-5'>view </Link>
        </div>
    </div>
    
    </div>
    
         
    </div>
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 faloodanation, Inc</p>
  </footer>
    </>
    
  )
}

export default Landing
