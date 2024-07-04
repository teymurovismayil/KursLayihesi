import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios'

function Outwear() {
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


    return (
        <>

            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Tee</h2>
                <p>Shop through our latest selection</p>
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
                            sortData().map((el, i) => {
                                return (
                                    <div key={i} className="col-6 col-lg-3  mb-5">
                                        <div>
                                            <div className='buttons-box'>
                                                <img src={el.img} />
                                                <div className="products-buttons">
                                                    <div className="products-button">
                                                        <BsCart3 />
                                                    </div>
                                                    <div className="products-button">
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

export default Outwear