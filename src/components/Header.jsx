import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar style={{background: "white",}}>
        <Container className='' >
          <Navbar.Brand href="" className='p-2'>
          <i className="fa-solid fa-mug-hot fa-flip" size="2xl" style={{color: "#0f0f10",}} />
            {' '}
           MemberSHIP OF FALOODA
          </Navbar.Brand>
        </Container>
        <div className='p-2'>
          <button className='btn btn-light'>LOGIN </button>
          </div>
        <div className='p-2'>
          <button className='btn btn-light'>SING</button>
          </div>
      </Navbar>
      
    </>
  )
}

export default Header
