import React, { useState } from 'react'
import { Flex, Box, Heading, FormControl, Input, Button, Alert } from "@chakra-ui/react";
import { useAuth } from '../../../Componentss/Context/AuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from '../SignIn/validations';
import { fetchLogin } from '../../../../api';
import axios from 'axios';


function Signin() {

    const { login } = useAuth();
    const navigate = useNavigate();
    

  
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const loginResponse = await fetchLogin({
                    email: values.email,
                    password: values.password,
                });
                login(loginResponse);

                navigate("/profile/")
                // console.log(info);
            } catch (e) {
                alert("Invalid email or password")
            }
        },
    });


    return (
        <>
            <Flex className='register' direction={'column'} align="center" width="full" justifyContent="center">
                <Box pt={100}>
                    <Flex alignItems={'center'}>
                        <Box textAlign="center">
                            <Heading>Sign In</Heading>
                        </Box>
                        <Link to='/register'>
                            <Button className='btn text-primary'>Sign Up</Button>
                        </Link>
                    </Flex>
                    <Box my={5}>
                        {
                            formik.errors.general && (
                                <Alert status='error'>
                                    {formik.errors.general}
                                </Alert>
                            )
                        }
                    </Box>
                    <Box my={5} textAlign="left">
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl mt="15">
                                <Input
                                    className="form-control"
                                    id='email'
                                    placeholder='E-Mail'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>
                            <FormControl mt="15">
                                <Input
                                    className="form-control"
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </FormControl>
                            <Button className='btn btn-outline-secondary w-100 ' mt="20" mb={80} width="full" type='submit'>
                                <span className='fs-5 text-danger'>Sign In</span>
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Signin