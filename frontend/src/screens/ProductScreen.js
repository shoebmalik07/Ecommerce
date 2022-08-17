import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Flex, Grid, Image, Heading, Text, Button, Select } from "@chakra-ui/react";
import Rating from "../components/Rating";
// import products from "../products";
import axios from 'axios'

import React from 'react'

const ProductScreen = () => {
    const [product, setProduct] = useState({})


    const { id } = useParams()
    const navigate = useNavigate()

    const [qty,setQty] = useState(1)

<<<<<<< Updated upstream
=======

    const productDetails = useSelector((state)=>state.productDetails)
    const {loading, error, product} = productDetails

    const addToCartHandler =()=>{
        navigate(`/cart/${id}?qty=${qty}`)
    }

>>>>>>> Stashed changes
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/products/${id}`)
            setProduct(data)
        }
        fetchProduct()
    },[id])

<<<<<<< Updated upstream
    // const product = products.find((prod) => prod._id === id)
=======

>>>>>>> Stashed changes
    return (
        <>
            <Flex mb='5'>
                <Button
                    as={RouterLink} to='/' colorScheme='orange'>
                    Go Back </Button>
            </Flex>
            



            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '5fr 4fr 3fr' }} gap='10'>
                <Image src={product.image} alt={product.name} borderRadius='md' />

                <Flex direction='column'>
                    <Heading as='h6' fontSize='base' color='gray.600'>
                        {product.brand}
                    </Heading>
                    <Heading as='h2' fontSize='4xl' mb='2'>
                        {product.name}
                    </Heading>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}

                    />
                    <Heading
                        as='h5'
                        my='5'
                        fontSize='4xl'
                        fontWeight='bold'
                        color='teal.600'
                    >
                        {`${product.price} INR`}
                    </Heading>
                    <Text>{product.description}</Text>

                </Flex>


                <Flex direction='column'>
                    <Flex justifyContent='space-between' py='2'>
                        <Text>Price:</Text>
                        <Text fontWeight='bold'>{product.price}</Text>

                    </Flex>

                    <Flex justifyContent='space-between' py='2'>
                        <Text>Status:</Text>
                        <Text fontWeight='bold'>{product.countInStock > 0 ? 'In Stock' : 'Not Available'}</Text>
                    </Flex>
                    {
                        product.countInStock>0 && (
                            <Flex justifyContent='space-between'py ='2'>
                            <Text>Qty: </Text>
                            <Select
                            value = {qty}
                            onChange = {(e)=>setQty(e.target.value)}
                            width = '30%'
                            >
                            {[...Array(product.countInStock).keys()].map((i)=>(
                                <option key = {i+1} value = {i+1}>
                                    {i+1}
                                </option>
                            ))}

                            </Select>

                            </Flex>
                        )
                    }
                    <Button
                        bgColor='gray.800'
                        textTransform='uppercase'
                        letterSpacing='wide'
                        colorScheme='teal'
                        my='2'
                        disabled={product.countInStock === 0}
                        onClick = {addToCartHandler}
                    >
                        Add To Cart
                    </Button>

                </Flex>
            </Grid>
        </>
    )
}

export default ProductScreen