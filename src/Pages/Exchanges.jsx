import React from 'react'

function Exchanges() {
    return (
        <>
            <div className='outwear-title'>
                <h2 className='outwear-title__text'>Delivery Return</h2>
            </div>
            <div className="container mt-5">
                <ul>
                    <li style={{listStyleType:'none', fontSize:'25px'}}><b>Delivery</b></li>
                    <li>All orders shipped with UPS Express.</li>
                    <li>Always free shipping for orders over US $250.</li>
                    <li>All orders are shipped with a UPS tracking number.</li>
                </ul>
                <ul>
                    <li style={{listStyleType:'none', fontSize:'25px'}}><b>Returns</b></li>
                    <li>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.</li>
                    <li>Refunds will be charged back to the original form of payment used for purchase.</li>
                    <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.t</li>
                    <li>All sale items are final purchases.</li>
                </ul>
                <ul>
                    <li style={{listStyleType:'none', fontSize:'25px'}}><b>Help</b></li>
                    <li>Give us a shout if you have any other questions and/or concerns.</li>
                    <li>Email: contact@domain.com</li>
                    <li>Phone: +1 (23) 456 789</li>
                </ul>
            </div>
        </>
    )
}

export default Exchanges