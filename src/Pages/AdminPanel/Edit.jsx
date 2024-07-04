import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Edit() {
    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: async () => fetch('http://localhost:3000/products/') });
    const onSubmit = data => {
        axios.patch('http://localhost:3000/products/' + id, data)
    };

    let { id } = useParams()

    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => setinfo(res.data))

    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 p-5 m-5 gap-3'>         
                <label>About:
                    <input className='w-100' {...register("about", { required: true })} defaultValue={info.about}
                        aria-invalid={errors.about ? "true" : "false"}
                    />
                    {errors.about?.type === 'required' && <p style={{ color: 'red' }} >No product information included</p>}
                </label>
                <label>Price:
                    <input className='w-100' {...register("price", { required: true })} defaultValue={info.price}
                        aria-invalid={errors.price ? "true" : "false"}
                    />
                    {errors.price?.type === 'required' && <p style={{ color: 'red' }} >Price not included</p>}
                </label>
                <label>Type of clothing:
                    <input className='w-100' {...register("kind", { required: true })} defaultValue={info.kind}
                        aria-invalid={errors.kind ? "true" : "false"}
                    />
                    {errors.kind?.type === 'required' && <p style={{ color: 'red' }} >No product information included</p>}
                </label>
                <input className='w-100 btn btn-primary' type="submit" />
            </form>
        </div>
    )
}

export default Edit