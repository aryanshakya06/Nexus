import React from 'react'
import UserLayout from '../layout/userLayout';
import { AppData } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logoutUser } = AppData();
  const navigate = useNavigate();
  return (
    <UserLayout>
      Profile Page Under Maintainance...
      <button hidden onClick={() => logoutUser(navigate)} id="force-logout">Logout</button>
      </UserLayout>
  )
}

export default Profile;