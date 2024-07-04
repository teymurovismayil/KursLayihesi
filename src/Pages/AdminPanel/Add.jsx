import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Add() {
    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: async () => fetch('http://localhost:3000/products/') });
    const [image, setimage] = useState(null)
    const convertoBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setimage(reader.result)
        }
    }
    const onSubmit = data => {
        axios.post('http://localhost:3000/products/', { ...data, img: image })
    };

    let { id } = useParams()

    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products/')
            .then(res => setinfo(res.data))

    }, [])
  return (
    <div className='d-flex justify-content-center'>
    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 p-5 m-5 gap-3'>         
        <label>About:
            <input className='w-100' {...register("about", { required: true })} 
                aria-invalid={errors.about ? "true" : "false"}
            />
            {errors.about?.type === 'required' && <p style={{ color: 'red' }} >No product information included</p>}
        </label>
        <label>Price:
            <input className='w-100' {...register("price", { required: true })} 
                aria-invalid={errors.price ? "true" : "false"}
            />
            {errors.price?.type === 'required' && <p style={{ color: 'red' }} >Price not included</p>}
        </label>
        <label>Type of clothing:
            <input className='w-100' {...register("kind", { required: true })} 
                aria-invalid={errors.kind ? "true" : "false"}
            />
            {errors.kind?.type === 'required' && <p style={{ color: 'red' }} >No product information included</p>}
        </label>
        
        <label>Image :
            <input type="file" onInput={(e) => convertoBase64(e.target.files[0])} />
        </label>
        <input className='w-100 btn btn-primary' type="submit" />
    </form>
</div>
  )
}

export default Add