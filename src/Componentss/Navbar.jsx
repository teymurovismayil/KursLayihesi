import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaManatSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import axios from 'axios';






function Navbar() {

    const ref = useRef()

    const [dropdownActive, setdropdownActive] = useState(false)
    const [searchActive, setsearchActive] = useState(false)
    const [dropListActive, setdropListActive] = useState(false)
    const [shopActive, setshopActive] = useState(false)
    const [productActive, setproductActive] = useState(false)
    const [pageActive, setpageActive] = useState(false)
    const [blogActive, setblogActive] = useState(false)
    const [priceActive, setpriceActive] = useState(false)
    const [buttonText, setButtonText] = useState("USD");
    const [languageText, setlanguageText] = useState("English");
    const [languageActive, setlanguageActive] = useState(false)
    const [info, setinfo] = useState([])
    const [wishInfo, setwishInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/basket')
            .then(res => setinfo(res.data))
        axios.get('http://localhost:3000/wishlist')
            .then(res => setwishInfo(res.data))
    }, [])

    const basketCount = info.length;
    const wishListCount = wishInfo.length;
    const { loggedIn } = useAuth();

    return (
        <>

            <div className="container border-0 htd-container border">
                <div className='navigator'>
                    <div className="row align-items-center">
                        <div className="col-8 col-lg-3 order-2 d-lg-block  d-flex   justify-content-center ">
                            <a href="/">
                                <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/Ecomus.svg?v=1699583364&width=272" alt="logo" />
                            </a>
                        </div>
                        <div ref={ref} className="dropdown-wrapper col-1 d-md-block d-lg-none order-1 mobilList">
                            <button onClick={() => { setdropdownActive(() => !dropdownActive) }} className='dropdown-btn'><RiMenu2Line /></button>
                            <div className={`${dropdownActive && 'show-dropdown'} dropdown-menu`}>
                                <div className="container">
                                    <div className="row gap-3">
                                        <div className="col-12 mb-4 close">
                                            <button onClick={() => { setdropdownActive(() => !dropdownActive) }} className='border-0 bg-transparent'>
                                                <MdOutlineCancel />
                                            </button>
                                        </div>
                                        <div className="col-12 ">
                                            <button onClick={() => { setdropListActive(() => !dropListActive) }} className=' w-100 d-flex justify-content-between bg-transparent  resList'>
                                                <span>Home</span>
                                                <span>+</span>
                                            </button>
                                            <div className={`${dropListActive && 'showDropList'} dropdown-list`}>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                                <div className="list-item">item4</div>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                                <div className="list-item">item4</div>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                                <div className="list-item">item4</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button onClick={() => { setshopActive(() => !shopActive) }} className='w-100 d-flex justify-content-between bg-transparent  resList'>
                                                <span>Shop</span>
                                                <span>+</span>
                                            </button>
                                            <div className={`${shopActive && 'showDropListShop'} dropdown-list`}>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button onClick={() => { setproductActive(() => !productActive) }} className='w-100 d-flex justify-content-between bg-transparent  resList'>
                                                <span>Products</span>
                                                <span>+</span>
                                            </button>
                                            <div className={`${productActive && 'showDropListProduct'} dropdown-list`}>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                                <div className="list-item">item4</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button onClick={() => { setpageActive(() => !pageActive) }} className='w-100 d-flex justify-content-between bg-transparent  resList'>
                                                <span>Pages</span>
                                                <span>+</span>
                                            </button>
                                            <div className={`${pageActive && 'showDropListPage'} dropdown-list`}>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                                <div className="list-item">item4</div>
                                                <div className="list-item">item1</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button onClick={() => { setblogActive(() => !blogActive) }} className='w-100 d-flex justify-content-between bg-transparent  resList'>
                                                <span>Blog</span>
                                                <span>+</span>
                                            </button>
                                            <div className={`${blogActive && 'showDropListBlog'} dropdown-list`}>
                                                <div className="list-item">item1</div>
                                                <div className="list-item">item2</div>
                                                <div className="list-item">item3</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <span>Buy now</span>
                                        </div>
                                        <div className="col-12">
                                            <button className='listButton'><FaRegHeart /> Wishlist</button>
                                            <button className='listButton'><IoSearchOutline /> Search</button>
                                        </div>
                                        <div className="col-12 help">
                                            <a href="/">Need Help ?</a>
                                        </div>
                                        <div className="col-12">
                                            <span className='address'>
                                                Address: 1234 Fashion Street, Suite567,<br />
                                                New York, NY 10001 <br />
                                                Email: info@fashionshop.com <br />
                                                Phone : (212) 555-1234
                                            </span>
                                        </div>
                                        <div className="col-12 loginbox">
                                            {!loggedIn && (
                                                <>
                                                    <Link to={'/register'}>
                                                        <button className='listButton'><IoPersonOutline /> Login</button>
                                                    </Link>
                                                </>
                                            )}
                                            {loggedIn && (
                                                <>
                                                    <Link to={'/profile'}>
                                                        <button className='listButton'><IoPersonOutline /> Profile</button>
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                        <div className="col-12 d-flex">
                                            <div className="price-wrapper">
                                                <div className={`${priceActive && 'showPrice'} price-menu `}>
                                                    <button onClick={() => {
                                                        setButtonText("AZN")
                                                    }} className='price-wrapper__item'>AZN <FaManatSign /> | Azerbaijan</button>
                                                    <button onClick={() => {
                                                        setButtonText("USD")
                                                    }} className='price-wrapper__item'>USD <FaDollarSign />| United States</button>
                                                    <button onClick={() => {
                                                        setButtonText("EUR")
                                                    }} className='price-wrapper__item'>EUR <FaEuroSign /> | Germany</button>
                                                </div>
                                                <button className='price-wrapper__button' onClick={() => { setpriceActive(() => !priceActive) }}>
                                                    <span>{buttonText}</span>
                                                </button>
                                            </div>
                                            <div className="price-wrapper">
                                                <div className={`${languageActive && 'showLanguage'} price-menu `}>
                                                    <button onClick={() => {
                                                        setlanguageText("Azərbaycanca")
                                                    }} className='price-wrapper__item'>Azərbaycanca</button>
                                                    <button onClick={() => {
                                                        setlanguageText("English")
                                                    }} className='price-wrapper__item'>English</button>
                                                </div>
                                                <button className='price-wrapper__button' onClick={() => { setlanguageActive(() => !languageActive) }}><span>{languageText}</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  d-none d-lg-block order-3 ">
                            <ul className='list'>
                                <li className='list__item'><a href="/dress">DRESS</a></li>
                                <li className='list__item'><a href="/jacket">JACKET</a></li>
                                <li className='list__item'><a href="/trousers">TROUSERS</a></li>
                                <li className='list__item'><a href="/">PAGES</a></li>
                                <li className='list__item'><a href="/all">ALL PRODUCTS</a></li>
                            </ul>

                        </div>
                        <div className="col-3 order-4">
                            <div className='icons'>
                                <div className="serarch-wrapper">
                                    <button onClick={() => { setsearchActive(() => !searchActive) }} className='icons-item border-0 bg-transparent' ><IoSearchOutline /></button>
                                    <div className={`${searchActive && 'show-search'} search-menu p-2`}>
                                        <div className="container-fluid border-bottom search-header">
                                            <div className="row">
                                                <button onClick={() => { setsearchActive(() => !searchActive) }} className="col-12 d-flex justify-content-end mt-4 border-0 bg-transparent  fs-4">
                                                    <MdOutlineCancel />
                                                </button>
                                                <div className="col-12 ">
                                                    <h5 className='search-header__text'>Search our site</h5>
                                                </div>
                                                <div className="col-12 d-flex align-items-center">
                                                    <div className="input-container border">
                                                        <i className='icon'><IoSearchOutline /></i>
                                                        <input onInput={(e) => setInpValue(e.target.value)} className='border-0 input-field' type="text" placeholder='Search' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid p-2 mt-4 search-body ">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6 className='search-body__text'>Quick link</h6>
                                                </div>
                                                <div className="col-12">
                                                    <ul className='search-body__list'>
                                                        <li><a href="/">Fashion</a></li>
                                                        <li><a href="/">Men</a></li>
                                                        <li><a href="/">Women</a></li>
                                                        <li><a href="/">Accessories</a></li>
                                                    </ul>
                                                    <h6 className='search-body__needtext '>Need some inspiration?</h6>
                                                </div>
                                                <div className="col-12 inspiration">
                                                    <div className='inspiration__img'>
                                                        <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/4.3_273205be-d12e-4ea1-944a-d7e87d6b5f58.jpg?v=1704697174&width=68" alt="" />
                                                    </div>
                                                    <div className='inspiration__text'>
                                                        <a href="http://localhost:5173/productsSale/7">"The Pack" Beanie</a><br />
                                                        <p>$39.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 inspiration">
                                                    <div className='inspiration__img'>
                                                        <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/7.jpg?v=1704698910&width=68" alt="" />
                                                    </div>
                                                    <div className='inspiration__text'>
                                                        <a href="http://localhost:5173/productsSale/5">"The Pack" Beanie</a><br />
                                                        <p>$39.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 inspiration">
                                                    <div className='inspiration__img'>
                                                        <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/pr1.jpg?v=1697254934&width=68" alt="" />
                                                    </div>
                                                    <div className='inspiration__text'>
                                                        <a href="/">"The Pack" Beanie</a><br />
                                                        <p>$39.00</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {!loggedIn && (
                                    <>
                                        <Link to={'/register'} style={{ color: 'black' }}>
                                            <div className='icons-item personicons'><IoPersonOutline /></div>
                                        </Link>
                                    </>
                                )}
                                {loggedIn && (
                                    <>
                                        <Link to={'/profile'} style={{ color: 'black', textDecoration: 'none' }}>
                                            <div className='icons-item personicons'>Profile</div>
                                        </Link>
                                    </>
                                )}
                                <Link to='/Wishlist' >
                                    <div className='icons-item hearticons'><FaRegHeart />
                                        <div className='wish-notification'>
                                            {wishListCount}
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/basket'>
                                    <div className='icons-item carticons'><BsCart3 />
                                        <div className='cart-notification'>
                                            {basketCount}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar