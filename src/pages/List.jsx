import React, { useEffect, useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsersAPI, deleteUserAPI } from '../services/allAPI';

function List() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await getAllUsersAPI();
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error( error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await deleteUserAPI(id);
        if (response.status === 200) {
          alert('User deleted successfully');
          // Refresh the list
          fetchAllUsers();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/home/${id}/view`);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 my-5">
            <h2 className="text-center mb-4">User List</h2>

            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>MOBILE NO</th>
                  <th>GENDER</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>
                        <Tooltip title='Delete'><MdDeleteOutline className='text-danger' style={{ cursor: 'pointer', fontSize: '1.3rem' }} onClick={() => handleDelete(user.id)}/></Tooltip>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-md-2">
            <Link to={'/form'} className='btn btn-outline-danger m-5'>Add new</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;