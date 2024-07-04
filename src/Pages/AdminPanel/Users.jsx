import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Users() {
  const [info, setinfo] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setinfo(res.data))
  }, [])
  let { id } = useParams()
  const deleteUsers = (id) => {
    axios.delete('http://localhost:3000/users/' + id)
  }
  const navigate = useNavigate()
  const openProducts = () => {
    navigate('/admin_products')
  }
  const openUsers = () => {
    navigate('/users')
  }
  const openDashboard = () => {
    navigate('/dashboard')
  }
  const logout = () => {
    navigate('/moderator')
}
  return (
    <>
      <div className='d-flex gap-3 bg-dark'>
        <div className='admin-leftside'>
          <div className='d-flex flex-column  gap-2 mt-5'>
            <button onClick={openDashboard} className='btn btn-outline-primary mt-5'>Dashboard</button>
            <button onClick={openProducts} className='btn btn-outline-primary mt-3'>Products</button>
            <button onClick={openUsers} className='btn btn-outline-primary mt-3'>Users</button>
            <button onClick={logout} className='btn btn-outline-primary mt-3'>Log Out</button>
          </div>
        </div>
        <div className='admin-rightside'>
          <table className='w-100 mt-5'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Delete User</th>
              </tr>
              {
                info.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el.id}</td>
                      <td>{el.firstName}</td>
                      <td>{el.lastName}</td>
                      <td>{el.email}</td>
                      <td>{el.password}</td>
                      <td><button onClick={(e) => deleteUsers(el.id)} className='btn btn-outline-primary'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </thead>
          </table>
        </div>
      </div>
      {/* 
      <div className='container mt-5'>
        <table className='w-100'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete User</th>
            </tr>
            {
              info.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el.id}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.email}</td>
                    <td>{el.password}</td>
                    <td><button onClick={(e) => deleteUsers(el.id)} className='btn'>Delete</button></td>
                  </tr>
                )
              })
            }
          </thead>
        </table>
      </div> */}
    </>
  )
}

export default Users
