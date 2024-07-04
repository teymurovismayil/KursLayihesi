import React from 'react'

function Buy() {
    return (
        <>
            <h5 className='p-5'> Delivery</h5>
            <div className="container">
                <form className=' w-50'>
                    <select className='w-100 p-2 m-1'>
                        <option>Azerbaijan</option>
                        <option>Unites States</option>
                        <option>Germany</option>
                        <option>Vietnam</option>
                    </select>
                    <input className='w-100 p-2 m-1' placeholder='Firstname' type="text" />
                    <input className='w-100 p-2 m-1' placeholder='Lastname' type="text" />
                    <input className='w-100 p-2 m-1' placeholder='Address' type="text" />
                    <input className='w-100 p-2 m-1' placeholder='City' type="text" />
                    <input className='w-100 p-2 m-1' placeholder='ZIP code' type="text" />
                </form>

                <h4 className='mt-5'>Payment</h4>
                <p className='mt-4'>All transactions are secure and encrypted.</p>
                <form className='mt-3 w-50'>
                    <input className='w-100 p-2 m-1' type="text" placeholder='Card Number' />
                    <input className='w-100 p-2 m-1' type="text" placeholder='Expiration Date' />
                    <input className='w-100 p-2 m-1' type="text" placeholder='Security Code' />
                    <button className='btn btn-info w-100 mt-2'>Pay Now</button>
                </form>
            </div>

        </>
    )
}

export default Buy