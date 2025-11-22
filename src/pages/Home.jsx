import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';


function Home() {
  return (
    <>
        <section style={{width:'100%',height:'100vh',backgroundImage:"url('/gym bg.jpeg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} 
        className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
            <h3>Forgue Your Body, Forgue Your Future</h3>
            <p>Your fitness journey starts here. Discover classes, personal trait training, and a community dedicated your strength</p>
            <Link to={'/Form'} className='btn text-white' style={{backgroundColor:'black'}}>Join Now</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      <section>
        <h1 className='text-center my-5'>THE GYM FORGE</h1>
    <div className="container-fluid row align-items-center">
      <div className="col-md-5 ms-5">
        <h4 className='fst-italic fw-bold text-center'>UNLEASH YOUR POTENTIAL</h4>
      
      <p className='fs-5' style={{textAlign:'center'}}>Train Hard, Achieve More, Become Alpha.</p>

      <p className='fs-5 fst-italic text-justify'>"At Gym Forge, we believe strength isn’t just built — it’s forged. Our mission is to help you transform your body and mind through dedication, discipline, and expert guidance"</p>

      <p  className='fs-5' style={{textAlign:'center'}}>Monday to Saturday <br />
      6:30 am - 10:00 pm</p>

      <p  className='fs-5' style={{textAlign:'center'}}>Closed on sunday</p>
      
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5">
        <img src="/gym logo.png" alt="" />
      </div>
      </div>
      </section>
            <div className='align-items-center justify-content-center d-flex'>
                <div className="shadow border w-50 py-4 rounded m-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                <h3 className='text-center text-dark'>3 Months Plan</h3>
                <p className='text-center text-dark'>Register <span className='text-danger'>Now!!!</span></p>
                <h3 className='text-center text-dark'>- @2699</h3>
                <p className='text-center text-dark'>Mon-sat <br />6:30am-10:00pm</p>
                <p className='text-center text-dark'    >(No trainers Available)</p>
              </div>
                <div className="shadow border w-50 py-4 rounded m-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                <h3 className='text-center text-dark'>6 Months Plan</h3>
                <p className='text-center text-dark'>Register <span className='text-danger'>Now!!!</span></p>
                <h3 className='text-center text-dark'>- @4999</h3>
                <p className='text-center text-dark'>Mon-sat <br />6:30am-10:00pm</p>
                <p className='text-center text-dark'>(PREMIUM - trainers Available)</p>
              </div>
                <div className="shadow border w-50 py-4 rounded m-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                <h3 className='text-center text-dark'>9 Months Plan</h3>
                <p className='text-center text-dark'>Register <span className='text-danger'>Now!!!</span></p>
                <h3 className='text-center text-dark'>- @7199</h3>
                <p className='text-center text-dark'>Mon-sat <br />6:30am-10:00pm</p>
                <p className='text-center text-dark'>(PREMIUM - trainers Available)</p>
              </div>
            </div>
        </>
  )
}

export default Home