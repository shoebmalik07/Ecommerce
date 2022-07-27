import { Link as RouterLink, useParams } from "react-router-dom";
import { Flex, Grid, Image, Heading, Text, Button } from "@chakra-ui/react";
import Rating from "../components/Rating";
import products from "../products";

import React from 'react'

const ProductScreen = () => {
    const {id} = useParams()
    
    const product = products.find((prod) => prod._id === id)
    return (
        <>
            <Flex mb='5'>
                <Button
                    as={RouterLink} to='/' colorScheme='orange'>
                    Go Back </Button>    
            </Flex>
        

            <Grid templateColumns='5fr 4fr 3fr' gap = '10'>
            <Image src={product.image} alt = {product.name} borderRadius = 'md' />

            <Flex direction='column'>
            <Heading as = 'h6' fontSize='base' color = 'gray.600'>
                {product.brand}
            </Heading>
            <Heading as = 'h2' fontSize='4xl' mb = '2'>
                {product.name}
            </Heading>
            <Rating
            value = {product.rating}
            text  = {`${product.numReviews} reviews`}

            />
            <Heading
            as = 'h5'
            my='5'
            fontSize = '4xl'
            fontWeight='bold'
            color = 'teal.600'
            >
                {`${product.price} INR`}
            </Heading>
            <Text>{product.description}</Text>

            </Flex>


            <Flex direction='column'>
            <Flex justifyContent='space-between' py = '2'>
            <Text>Price:</Text>
            <Text fontWeight='bold'>{product.price}</Text>

            </Flex>

            <Flex justifyContent= 'space-between' py = '2'>
            <Text>Status:</Text>
            <Text fontWeight='bold'>{product.countInStock>0 ? 'In Stock': 'Not Available'}</Text>
            </Flex>
            <Button
            bgColor='gray.800'
            textTransform = 'uppercase'
            letterSpacing='wide'
            colorScheme='teal'
            my = '2'
            disabled = {product.countInStock===0}
            >
                Add To Cart
            </Button>
                
            </Flex>
            </Grid>
        </>
    )
}

export default ProductScreen