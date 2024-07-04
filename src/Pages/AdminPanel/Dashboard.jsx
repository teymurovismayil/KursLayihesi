import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FcSalesPerformance } from "react-icons/fc";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";

function Dashboard() {
    const navigate = useNavigate()
    const openUsers = () => {
        navigate('/users')
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
    useEffect(() => {
        const xValues = ["Trouesers", "Dress", "Clothes", "Jacket", "Shoes"];
        const yValues = [55, 49, 44, 24, 15];
        const xxValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
        const yyValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

        const barColors = [
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145"
        ];

        new Chart("myChart", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "World Wide Wine Production 2018"
                }
            }
        });

        new Chart("myChart2", {
            type: "line",
            data: {
                labels: xxValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yyValues
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{ ticks: { min: 6, max: 16 } }],
                }
            }
        });
    }, [])

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
                    <h2 className='p-5'>Admin Panel</h2>
                    <div className='row gap-4 m-4'>
                        <div className='col-12 col-md-3 admin-rightside__cards bg-danger'>
                            <span className='fs-1 d-flex justify-content-center p-2'><FcSalesPerformance /></span>
                            <p className='d-flex justify-content-center text-dark'>Total Sales</p>
                            <h2 className='d-flex justify-content-center text-dark'>$ 9568.19</h2>
                        </div>
                        <div className='col-12 col-md-3 admin-rightside__cards bg-info'>
                            <span className='fs-1 d-flex justify-content-center p-2 text-warning'><FaCircleDollarToSlot /></span>
                            <p className='d-flex justify-content-center text-dark'>Total Earnings</p>
                            <h2 className='d-flex justify-content-center text-dark'>$ 45930.36</h2>
                        </div>
                        <div className='col-12 col-md-3 admin-rightside__cards bg-light'>
                            <span className='fs-1 d-flex justify-content-center p-2 text-warning'><FaBasketShopping /></span>
                            <p className='d-flex justify-content-center text-dark'>Total Orders</p>
                            <h2 className='d-flex justify-content-center text-dark'>150 K</h2>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <canvas id="myChart" style={{ width: '100%', maxWidth: '800px' }}></canvas>
                        <canvas className='bg-info m-5' id="myChart2" style={{ width: '100%', maxWidth: '800px' }}></canvas>
                    </div>
                    {/* <div className='d-flex gap-5'>
                        <canvas id="myChart" style={{ width: '90%', maxWidth: '600px' }}></canvas>
                        <canvas id="myChart2" style={{ width: '90%', maxWidth: '400px' }}></canvas>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Dashboard