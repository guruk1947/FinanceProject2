import React, { useState } from 'react';
import { FaUserCircle, FaPhone, FaSignOutAlt, FaCaretDown } from 'react-icons/fa';
import { useAuth } from '../Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';
import Axios_request from '../Axios_request';

const ProfileMenu = ({toastRef}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = (e) =>{
        
    e.preventDefault();
    Axios_request("get",
      "/logout",
      {}
    ).then(response => {
      console.log(response.data);
      logout();
      // alert('User logout successfully!');
      navigate('/login');
      toastRef.current.showToast('Logout successful..!');
    })
    .catch(error => {
      // console.log(error.data);
      //console.error('Error registering user:', error);
      alert('Error logging out user!');
    });
  };
  return (
    <div className="dropdown">
      <div
        className="d-flex align-items-center"
        style={{ cursor: 'pointer' }}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <FaUserCircle size={24} />
        <FaCaretDown style={{ marginLeft: '5px' }} />
      </div>

      {isOpen && (
        <div className="dropdown-menu show" style={{ position: 'absolute' }}>
          <a className="dropdown-item" href="#/profile">
            <FaUserCircle className="mr-2" /> Profile
          </a>
          <a className="dropdown-item" href="#/contacts">
            <FaUserCircle className="mr-2" /> Your Contacts
          </a>
          <a className="dropdown-item" href="#/contact">
            <FaPhone className="mr-2" /> Contact Us
          </a>
          <a className="dropdown-item" href="#/log" onClick={handleLogout}>
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
