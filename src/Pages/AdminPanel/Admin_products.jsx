import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";


function Admin_products() {
  const [info, setinfo] = useState([])
  const [inpValue, setInpValue] = useState("");
  const [cngValue, setCngValue] = useState("def");
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setinfo(res.data))
  }, [])
  const navigate = useNavigate()
  const openUsers = () => {
    navigate('/users')
  }
  const { id } = useParams()
  const deleteProduct = (id) => {
    axios.delete('http://localhost:3000/products/' + id)
  }
  const openDashboard = () => {
    navigate('/dashboard')
  }

  const openProducts = () => {
    navigate('/admin_products')
  }
  const logout = () => {
    navigate('/moderator')
  }
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  const filterData = info.filter((inf) => inf.about.toUpperCase().startsWith(inpValue.toUpperCase()))
  const sortData = () => {
    if (cngValue == 'inc') {
      return filterData.toSorted((a, b) => a.price - b.price)
    } else if (cngValue == 'dec') {
      return filterData.toSorted((a, b) => b.price - a.price)
    } else {
      return [...filterData]
    }
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
          <div>
            <input onInput={(e) => setInpValue(e.target.value)} type="text" placeholder='Search' className='w-50 mt-5' />
            <select onChange={(e) => setCngValue(e.target.value)}>
              <option value="def">Default</option>
              <option value="inc">Artan sira</option>
              <option value="dec">Azalan sira</option>
            </select>
          </div>
          <div>
            <Link to='/add'>
              <button className='bg-transparent border-0 text-white mt-5'>
                <span className='fs-2'>
                  <IoMdAddCircleOutline />
                </span>
                Add Product
              </button>
            </Link>
          </div>
          <table className='admin-table mt-5'>
            <thead>
              <tr>
                <th>Your cart Product</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {
                sortData().map((el, i) => {
                  return (
                    <tr key={i} className='border'>
                      <td>
                        <div className='d-flex align-items-center gap-3'>
                          <div className='admin-table__image'>
                            <img src={el.img} />
                          </div>
                          <p>
                            {el.about}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex'>
                          <span>$</span>
                          <p>
                            {el.price}
                          </p>
                        </div>
                      </td>
                      <td><button onClick={(e) => deleteProduct(el.id)} className='btn btn-danger'>Delete</button></td>
                      <td><Link to={'/edit/' + el.id}><button className='btn btn-primary'>Edit</button></Link></td>
                    </tr>
                  )
                })
              }
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}

export default Admin_products