import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleUserAPI, updateUserAPI } from '../services/allAPI';
import { Modal, Box, TextField, Button } from '@mui/material';

function View() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    height: '',
    weight: '',
    goal: ''
  });

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, [id]);

  const fetchUserData = async () => {
    try {
      const response = await getSingleUserAPI(id);
      if (response.status === 200) {
        setUserData(response.data);
        setEditData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => {
    setEditData(userData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateUserAPI(id, editData);
      if (response.status === 200) {
        alert('Details updated successfully');
        setUserData(editData);
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const modalStyle = {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 500,bgcolor: 'background.paper',boxShadow: 24,p: 4,borderRadius: 2,maxHeight: '90vh',overflowY: 'auto'};

  if (!userData) {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{backgroundImage: "url('/public/formbg.jpeg')",backgroundSize: 'cover',minHeight: '100vh'
    }}>
      <div className="row my-5">
        <div className="col-md-3"></div>

        <div className="col-md-6">
          <h1 className='text-white fw-bold text-center my-5'>PERSONAL DETAILS</h1>

          <div className="border rounded p-5 my-3" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <h4><b>Name:</b> {userData.name}</h4>
            <h4><b>Age:</b> {userData.age}</h4>
            <h4><b>Gender:</b> {userData.gender}</h4>
            <h4><b>Phone:</b> {userData.phone}</h4>
            <h4><b>Height:</b> {userData.height} cm</h4>
            <h4><b>Weight:</b> {userData.weight} kg</h4>
            <h4><b>Goal:</b> {userData.goal}</h4>

            <div className='d-flex align-items-center justify-content-between'>
              <button className="btn btn-outline-danger mt-3" onClick={handleOpenModal}>Edit</button>
              
              <button className="btn btn-outline-dark mt-3 ms-2" onClick={() => navigate('/list')}>View List</button>

              <button className="btn btn-outline-success mt-3 ms-2" onClick={() => navigate('/form')}>Back to Home</button>
            </div>
          </div>
        </div>

        <div className="col-md-3"></div>
      </div>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="edit-modal-title">
        <Box sx={modalStyle}>
          <h4 id="edit-modal-title" className='mb-4 fw-bold'>Edit Details</h4>
          
          <TextField fullWidth label="Name" value={editData.name} onChange={(e) => handleEditChange('name', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Age" type="number" value={editData.age} onChange={(e) => handleEditChange('age', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Gender" value={editData.gender} onChange={(e) => handleEditChange('gender', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Phone" value={editData.phone} onChange={(e) => handleEditChange('phone', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Height (cm)" type="number" value={editData.height} onChange={(e) => handleEditChange('height', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Weight (kg)" type="number" value={editData.weight} onChange={(e) => handleEditChange('weight', e.target.value)} margin="normal"/>
          
          <TextField fullWidth label="Goal" value={editData.goal} onChange={(e) => handleEditChange('goal', e.target.value)}margin="normal"/>
          
          <div className='mt-4'>
            <Button variant="contained" color="primary" onClick={handleUpdate}sx={{ mr: 2 }}>Save Changes</Button>
            <Button variant="outlined" color="secondary" onClick={handleCloseModal}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default View;