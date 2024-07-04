import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios'

function Dress() {
    const [info, setinfo] = useState([])
    const [cngValue, setCngValue] = useState("def");

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => setinfo(res.data))
    }, [])

    const sortData = ()=> {
        if(cngValue == 'inc'){
            return info.toSorted((a,b)=> a.price - b.price)
        }
        else if(cngValue == 'dec'){
            return info.toSorted((a,b)=> b.price - a.price)
        }
        else{
            return [...info]
        }
    }

    const filterProduct = sortData().filter((a) => a.kind == "dress")
    const addToBasket = (id) => {


        axios.get('http://localhost:3000/products/' + id).then(
            res => axios.post('http://localhost:3000/basket/', res.data)
        )
    }

    const addToWishlist = (id) => {


        axios.get('http://localhost:3000/products/' + id).then(
            res => axios.post('http://localhost:3000/wishlist/', res.data)
        )
    }

    return (
        <>

            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Dress</h2>
            </div>
            <div className='container mt-5'>
                <select onChange={(e) => setCngValue(e.target.value)}>
                    <option value="def">Featured</option>
                    <option value="inc">Price, low to high</option>
                    <option value="dec">Price, high to low</option>
                </select>
            </div>
            <section id='products' className='container mt-5'>
                <div className="mt-5">
                    <div className="row">
                        {
                            filterProduct.map((el, i) => {
                                return (
                                    <div key={i} className="col-6 col-lg-3  mb-5">
                                        <div>
                                            <div style={{width:'270px', height:'350px'}} className='buttons-box'>
                                                <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={el.img} />
                                                <div className="products-buttons">
                                                    <div onClick={(e)=>addToBasket(el.id)} className="products-button">
                                                        <BsCart3 />
                                                    </div>
                                                    <div onClick={(e)=>addToWishlist(el.id)} className="products-button">
                                                        <FaRegHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cards'>
                                                <h6 className='cards__about'>{el.about}</h6>
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

export default Dress