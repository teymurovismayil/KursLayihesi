import React from 'react'
import { WiDirectionUpRight } from "react-icons/wi";
import { Link } from 'react-router-dom';



function Categories() {
    return (
        <>

            <section id='categories'>
                <h1 className='categories-title'>Shop by categories</h1>

                <div className="container mb-5">
                    <div className="row">
                        <div className=" col-6 col-lg-4 hover-zoom image-box">
                            <img  src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/banner_home_tee.jpg?v=1699416715&width=920" alt="Avatar" className="image" />
                            <div className="middle">
                                <Link to='/outwear' className="text-decoration-none">
                                    <button className="text d-flex gap-1 border-0">OUTWEAR
                                        <div className='hover-icon'>
                                            <WiDirectionUpRight />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className=" col-6 col-lg-4 image-box">
                            <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/collection2_0fe84ced-f721-4031-b1d1-e4f3016ef4a8.jpg?v=1704686558&width=920" alt="Avatar" className="image" />
                            <div className="middle">
                                <Link to='/outwear' className="text-decoration-none">
                                    <button className="text d-flex gap-1 border-0">TEES
                                        <div className='hover-icon'>
                                            <WiDirectionUpRight />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className=" col-6 col-lg-4 image-box">
                            <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/category3.jpg?v=1696004966&width=920" alt="Avatar" className="image" />
                            <div className="middle">
                                <Link to='/outwear' className="text-decoration-none">
                                    <button className="text d-flex gap-1 border-0">ACCESSORIES
                                        <div className='hover-icon'>
                                            <WiDirectionUpRight />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="collection__box">
                        <h1 className='mb-5'>Big Sur Collection</h1>
                        <p className='mb-5'>
                            Introducing the Crafed Collection, an exquisite expansion of our renowned Crafted Heavyweight t-shirt range
                        </p>
                        <Link to='/outwear'>
                            <button className='text-decoration-none collection__box__button'>Shop Now</button>
                        </Link>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Categories