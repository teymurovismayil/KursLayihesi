import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
function AdminPanel() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if (data.username === 'admin' && data.password==='admin123') {
      navigate('/dashboard')
    }
    else {
      alert('Inavalid username or password')
    }
  };

  return (

    <>
      {/* <h1 className='text-center'>Admin Panel</h1> */}

      <div className='moderator'>
        <form className='d-flex flex-column mt-5 align-items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
          <div className='admin-img'></div>
          <h3 className='mb-5'>Admin</h3>
          <input className='p-2 w-50 rounded-5' {...register("username")} placeholder='Username' />
          <input type='password' className='p-2 w-50 rounded-5' {...register("password")} placeholder='Password' />
          <button className='btn btn-outline-danger w-50'>Log In</button>
        </form>
      </div>



    </>
  )
}

export default AdminPanel