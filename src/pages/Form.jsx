import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { addUserAPI } from '../services/allAPI';

function Form() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    height: '',
    weight: '',
    goal: '',
  });

  const handleAddFormData = async () => {
    const { name, age, gender } = formData;
    
    if (!name || !age || !gender) {
      alert("Please fill the form completely");
      return;
    }

    try {
      const result = await addUserAPI(formData);
      console.log(result);
      
      if (result.status === 201) {
        alert("Registration successfully completed");
        const { id } = result.data;
        // Navigate to view page with the user ID
        navigate(`/home/${id}/view`);
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div style={{ backgroundImage: "url('/public/formbg.jpeg')",backgroundSize: 'cover',minHeight: '100vh',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
      <div className='text-white border rounded p-5 d-flex m-5 w-50 flex-column' style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
        <h2 className='text-center text-dark fw-bold'>Registration Form</h2>

        <TextField value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} id="name" sx={{ margin: '15px' }} label="Enter Your Name" variant="outlined"/>

        <TextField 
          value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} id="age" sx={{ margin: '15px' }} label="Enter Your Age" variant="outlined" type="number"/>

        <TextField value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} 
        id="gender" sx={{ margin: '15px' }} label="Enter Your Gender" variant="outlined"/>

        <TextField value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} id="phone" sx={{margin: '15px' }} label="Enter Your Mobile No" variant="outlined"/>

        <TextField value={formData.height} onChange={e => setFormData({ ...formData, height: e.target.value })}id="height" sx={{ margin: '15px' }} label="Enter Your Height(cm)" variant="outlined" type="number"/>

        <TextField value={formData.weight} onChange={e => setFormData({ ...formData, weight: e.target.value })}id="weight" sx={{ margin: '15px' }} label="Enter Your Weight(kg)" variant="outlined" type="number"/>

        <TextField value={formData.goal} onChange={e => setFormData({ ...formData, goal: e.target.value })} id="goal" sx={{ margin: '15px' }} label="Enter Your Goal eg:weight loss, muscle gain" variant="outlined"/>
      
        <Button variant="contained" onClick={handleAddFormData} className='w-25'>Register</Button>
      </div>
    </div>
  );
}

export default Form;