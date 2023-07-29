import React, { useContext } from 'react';
import userContext from '../context/userContext';
import Sidebar from '../pages/global/Sidebar';
import { useNavigate } from 'react-router-dom';
import { deleteUsers, getUserById} from '../services/user-service';
import Swal from 'sweetalert2';
import '../components/css/signUp.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Profile() {
  const [user,setUser] = useState({
    name: "",
    email:"",
    height:"",
    weight:"",
    age:"",
    gender:""
  });
  const navigate = useNavigate();
  const obj = useContext(userContext);

  const handleUpdate = (id) => {
    navigate(`/user/update/${id}`);
  };

  useEffect(()=>{
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;
    getUserById(userdto.id)
    .then((data)=>{
      console.log(data);
      setUser(data)
    })
  },[])
  const handleDelete = () => {
    deleteUsers(obj.user.data.id)
      .then((data) => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            text: 'Account Deleted Successfully',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate('/');        
      }).catch((err)=>{
        Swal.fire({
          icon: 'failed',
          text: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500,
        })
      })
        
  };

  return (
    <div className="app">
      <div className="css-1j1s727">
        <Sidebar />
      </div>
      <div className="profile-page">
          <div className="welcome-user">
              <h1>Welcome 🎉 {obj.user.login && user.name} 🎉</h1>
          </div>
        <div className='profile-card'>
          
          <div className='profile-data'>
            <table className='side-heading'>
              <tr>
                <th className='header-data'>User Name</th>
                <td className='data'>{obj.user.login && user.name}</td>
              </tr>
              <tr>
                <th className='header-data'>Email Id</th>
                <td className='data'>{obj.user.login && user.email}</td>
              </tr>
              <tr>
                <th className='header-data'>Height</th>
                <td className='data'>{obj.user.login && user.height}</td>
              </tr>
              <tr>
                <th className='header-data'>Age</th>
                <td className='data'>{obj.user.login && user.age}</td>
              </tr>
              <tr>
                <th className='header-data'>Gender</th>
                <td className='data'>{obj.user.login && user.gender}</td>
              </tr>
              <tr>
                <th className='header-data'>Weight</th>
                <td className='data'>{obj.user.login && user.weight}</td>
              </tr>
            </table>
          </div>
          <div className='registration-form'>
              <button onClick={()=>handleUpdate(obj.user.data.id)}>Update Account</button>
              <button onClick={handleDelete}>Delete Account</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Profile;
