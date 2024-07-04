import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";

function Wishlist() {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/wishlist')
            .then(res => {
                setinfo(res.data)
            })
    }, [])
    let { id } = useParams()
    const RemoveFromWishlist = (id) => {
        axios.delete('http://localhost:3000/wishlist/' + id)
    }

    return (
        <>

            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Your wishlist</h2>
            </div>
            <section id='products' className='container mt-5'>
                <div className="container">
                    <div className="row">
                        {
                            info.map((el, i) => {
                                return (
                                    <div key={i} className="col-6 col-lg-3  mb-5">
                                        <div>
                                            <div className='buttons-box'>
                                                <Link className='text-decoration-none' to={'/productsSale/' + el.id}>
                                                    <div style={{width:'280px', height:'320px'}} className='img-box'>
                                                        <img style={{height:'100%'}} src={el.img} />
                                                    </div>
                                                </Link>
                                                <div className="products-buttons">
                                                    <div className="products-button">
                                                        <div onClick={(e) => RemoveFromWishlist(el.id)}>
                                                            <RiDeleteBin6Line />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cards'>
                                                <Link className='text-decoration-none' to={'/productsSale/' + el.id}>
                                                    <h6 className='cards__about'>{el.about}</h6>
                                                </Link>
                                                <h5><span>$</span>{el.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist