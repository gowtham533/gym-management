import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'darkred'}} className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='text-white'>Contact Us</h1>
        <h5 className='text-white'><MdEmail />gymforgeYT232@gmail.com</h5>
        <h5 className='text-white'><FaPhoneAlt />9544637227</h5>
        <h5 className='text-white'>Connect with us</h5>
        <div className='d-flex text-white'>
          <FaWhatsapp className='me-2'/>
          <FaInstagram />
          <FaFacebookF className='ms-2'/>
        </div>
    </div>
  )
}

export default Footer