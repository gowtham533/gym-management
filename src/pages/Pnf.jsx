import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <>
      <div className='text-center d-flex align-items-center justify-content-center flex-column' style={{height:"80vh"}}>
          <h3 className='fw-bold'>PAGE NOT FOUND</h3>
          <h1 className='fw-bold' style={{fontSize:"50px"}}>4<span className='text-danger'>0</span>4</h1>
          <img className='w-25' src="/error-404-animation-gif-download-4699354.webp" alt="" />
      <Link to={'/'} className='btn btn-outline-success p-2'>BACK TO HOME</Link>
      </div>
    </>
  )
}

export default Pnf