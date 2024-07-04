import React from 'react'

function Shipping() {
  return (
    <>

      <div className='outwear-title'>
        <h2 className='outwear-title__text'>Shipping & Delivery</h2>
      </div>
      <div className='p-5'>

        <h3>Delivery</h3>
        <ul className='list-group'>
          <li className='list-group-item border-0'>
            All orders shipped with UPS Express.
          </li>
          <li className='list-group-item border-0'>Always free shipping for orders over US $250.</li>
          <li className='list-group-item border-0'>All orders are shipped with a UPS tracking number.</li>
        </ul>
        <h3>Returns</h3>
        <ul className='list-group'>
          <li className='list-group-item border-0'>
            Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.
          </li>
          <li className='list-group-item border-0'>Refunds will be charged back to the original form of payment used for purchase.</li>
          <li className='list-group-item border-0'>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
          <li className='list-group-item border-0'>All sale items are final purchases.</li>
        </ul>
        <h3>Help</h3>
        <ul className='list-group'>
          <li className='list-group-item border-0'>
            Give us a shout if you have any other questions and/or concerns.
          </li>
          <li className='list-group-item border-0'>Email: contact@domain.com</li>
          <li className='list-group-item border-0'>Phone: +1 (23) 456 789</li>
        </ul>
      </div>
    </>
  )
}

export default Shipping