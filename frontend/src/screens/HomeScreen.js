import { Heading, Grid, Flex } from "@chakra-ui/react";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
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