import React, { useEffect, useState } from 'react'
import { useAuth } from '../Componentss/Context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




function Profile() {
    const [info, setinfo] = useState([])
    const { user, logout } = useAuth();

    const navigate = useNavigate();
  
    const handleLogOut = async () => {
        logout(() => {
            navigate("/")
        });
    };
    
    return (
        <>
         
            <code>{JSON.stringify(user)}</code>
            <button className='btn btn-outline-danger' onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default Profile