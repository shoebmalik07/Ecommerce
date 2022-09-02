import React from 'react'
import {Box, Button, Flex, Grid, Heading, Image, Link, Text} from '@chakra-ui/react'
import { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {

  const cart = useSelector((state)=>state.cart)

  cart.itemsPrice = cart.cartItems.reduce((acc,currVal)=>acc+ currVal.price * +currVal.qty, 0)
  cart.shippingPrice = cart.itemsPrice<5000 ? 1000 : 0
  cart.taxPrice = (cart.itemsPrice *18)/100
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice

  const placeOrderHandler =()=>{
      console.log('place order')
  }
  return (
    <Flex w='full' direction='column' py='5'>
    <CheckoutSteps step1 step2 step3 step4 />

      <Grid templateColumns='3fr 2fr' gap='20'>
      {/* column 1 */}
      <Flex direction='column'>
        {/* shipping */}
        <Box borderBottom='1px' py='6' borderColor='gray.300'>
						<Heading as='h2' mb='3' fontSize='2xl' fontWeight='semibold'>
							Shipping
						</Heading>
						<Text>
							<strong>Address: </strong>
							{cart.shippingAddress.address}, {cart.shippingAddress.city},
							{cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
						</Text>
					</Box>

        {/* payment method */}
        <Box borderBottom='1px' py='6' borderColor='gray.300'>
						<Heading as='h2' mb='3' fontSize='2xl' fontWeight='semibold'>
							Payment Method
						</Heading>
						<Text>
							<strong>Method: </strong>
							{cart.paymentMethod}
						</Text>
					</Box>

          {/* order items */}
          <Box borderBottom='1px' py='6' borderColor='gray.300'>
						<Heading as='h2' mb='3' fontSize='2xl' fontWeight='semibold'>
							Order Items
						</Heading>
						<Box>
							{cart.cartItems.length === 0 ? (
								<Message>Your cart is empty</Message>
							) : (
								<Box py='2'>
									{cart.cartItems.map((item, idx) => (
										<Flex
											key={idx}
											alignItems='center'
											justifyContent='space-between'>
											<Flex py='2' alignItems='center'>
												<Image
													src={item.image}
													alt={item.name}
													w='12'
													h='12'
													objectFit='cover'
													mr='6'
												/>
												<Link
													fontWeight='bold'
													fontSize='xl'
													as={RouterLink}
													to={`/products/${item.product}`}>
													{item.name}
												</Link>
											</Flex>

											<Text fontSize='lg' fontWeight='semibold'>
												{item.qty} x ₹{item.price} = ₹{+item.qty * item.price}
											</Text>
										</Flex>
									))}
								</Box>
							)}
						</Box>
					</Box>

      </Flex>
      <Flex
      direction='column'
					bgColor='white'
					justifyContent='space-between'
					py='8'
					px='8'
					shadow='md'
					rounded='lg'
					borderColor='gray.300'>
          <Box>
          <Heading mb='6' as='h2' fontSize='3xl' fontWeight='bold'>
							Order Summary
						</Heading>
          </Box>

          {/* Items Price */}
						<Flex
							borderBottom='1px'
							py='2'
							borderColor='gray.200'
							alignitems='center'
							justifyContent='space-between'>
							<Text fontSize='xl'>Items</Text>
							<Text fontWeight='bold' fontSize='xl'>
								₹{cart.itemsPrice}
							</Text>
						</Flex>

            {/* Shipping Price */}
						<Flex
							borderBottom='1px'
							py='2'
							borderColor='gray.200'
							alignitems='center'
							justifyContent='space-between'>
							<Text fontSize='xl'>Shipping</Text>
							<Text fontWeight='bold' fontSize='xl'>
								₹{cart.shippingPrice}
							</Text>
						</Flex>

            {/* Tax Price */}
						<Flex
							borderBottom='1px'
							py='2'
							borderColor='gray.200'
							alignitems='center'
							justifyContent='space-between'>
							<Text fontSize='xl'>Tax</Text>
							<Text fontWeight='bold' fontSize='xl'>
								₹{cart.taxPrice}
							</Text>
						</Flex>

            {/* Total Price */}
						<Flex
							borderBottom='1px'
							py='2'
							borderColor='gray.200'
							alignitems='center'
							justifyContent='space-between'>
							<Text fontSize='xl'>Total</Text>
							<Text fontWeight='bold' fontSize='xl'>
								₹{cart.totalPrice}
							</Text>
						</Flex>

            <Button
						size='lg'
						textTransform='uppercase'
						colorScheme='yellow'
						type='button'
						w='full'
						onClick={placeOrderHandler}
						disabled={cart.cartItems === 0}>
						Place Order
					</Button>

      </Flex>

      </Grid>
    </Flex>
  )
}

export default PlaceOrderScreen