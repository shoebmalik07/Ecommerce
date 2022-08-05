import { Heading, Grid, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Product from "../components/Product";
// import products from "../products";
import axios from 'axios'


const HomeScreen = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const {data} = await axios.get('/api/products')
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    },[])

    
 
    return (
        <div>

            <Heading as='h2' mb='8' fontSize='3xl'>
                Latest Products
            </Heading>
            <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8' >
                {
                    products.map((prod) => (
                        <Product key={prod._id} product={prod} />
                    ))
                }
            </Grid>
            
        </div>
    )
}
export default HomeScreen