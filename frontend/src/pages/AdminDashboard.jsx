import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { server } from '../main.jsx';
import api from '../../apiInterceptor.js';
import UserLayout from '../layout/userLayout/index.jsx';
import { AppData } from '../context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [content, setContent] = useState("");
  const { logoutUser } = AppData();
  const navigate = useNavigate();

  async function fetchAdminData() {
       try {
          const {data} = await api.get(`${server}/api/v1/admin`, {
            withCredentials: true
          });
          setContent(data.message);
       } catch (error) {
          toast.error(error.response.data.message);
       }
  }
  useEffect(() => {
    fetchAdminData();
  }, [])

  return (
    <UserLayout>
    {
      content && <div>{content}</div>
    }
    <button hidden onClick={() => logoutUser(navigate)} id="force-logout">Logout</button>
    </UserLayout>
  )
}

export default Dashboard