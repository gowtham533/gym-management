import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Edit() {
  return (
    <div>
        <div className='text-white border rounded p-5 d-flex m-5 w-50 flex-column' style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
        <h2 className='text-center text-white'>Registration Form</h2>

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Name" variant="outlined" />

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Age" variant="outlined" />

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Email" variant="outlined" />

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Mobile No" variant="outlined" />

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Gender" variant="outlined" />

        <TextField id="outlined-basic" sx={{margin:'15px'}} label="Enter Your Goal  eg:weight loss, muscle gain" variant="outlined" />
        

        <Button variant="contained" className='w-25'>Save changes</Button>

      </div>
    </div>
  )
}

export default Edit