import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Flex,
  Grid,
  Image,
  Heading,
  Text,
  Button,
  Select,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Link,
} from "@chakra-ui/react";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstant";

import React from "react";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  useEffect(() => {
    if (successProductReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  return (
    <>
      <Flex mb="5">
        <Button as={RouterLink} to="/" colorScheme="orange">
          Go Back
        </Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "5fr 4fr 3fr" }}
          gap="10"
        >
          <Image src={product.image} alt={product.name} borderRadius="md" />

          <Flex direction="column">
            <Heading as="h6" fontSize="base" color="gray.600">
              {product.brand}
            </Heading>
            <Heading as="h2" fontSize="4xl" mb="2">
              {product.name}
            </Heading>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <Heading
              as="h5"
              my="5"
              fontSize="4xl"
              fontWeight="bold"
              color="orange.500"
            >
              {`${product.price} INR`}
            </Heading>
            <Text>{product.description}</Text>
          </Flex>

          <Flex direction="column">
            <Flex justifyContent="space-between" py="2">
              <Text>Price:</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </Flex>

            <Flex justifyContent="space-between" py="2">
              <Text>Status:</Text>
              <Text fontWeight="bold">
                {product.countInStock > 0 ? "In Stock" : "Not Available"}
              </Text>
            </Flex>
            {product.countInStock > 0 && (
              <Flex justifyContent="space-between" py="2">
                <Text>Qty: </Text>
                <Select
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  width="30%"
                >
                  {[...Array(product.countInStock).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Select>
              </Flex>
            )}
            <Button
              bgColor="gray.800"
              textTransform="uppercase"
              letterSpacing="wide"
              colorScheme="teal"
              my="2"
              disabled={product.countInStock === 0}
              onClick={addToCartHandler}
            >
              Add To Cart
            </Button>
          </Flex>
        </Grid>
      )}
      {/* Review Form */}
      <Box mt="10">
        <Box>
          <Heading as="h2" size="xl" mb="4">
            Reviews
          </Heading>

          {product.reviews.length === 0 && <Message>No Reviews</Message>}

          {product.reviews.length !== 0 && (
            <Box p="4" bgColor="white" rounded="mb" mb="1" mt="5">
              {product.reviews.map((review) => (
                <Flex direction="column" key={review._id} mb="5">
                  <Flex justifyContent="space-between">
                    <Text fontSize="lg">
                      <strong>{review.name}</strong>
                      {review.createdAt?.substring(0, 10)}
                    </Text>
                    <Rating value={review.rating} />
                  </Flex>
                  <Text mt="2">{review.comment}</Text>
                </Flex>
              ))}
            </Box>
          )}
          {/* form */}
          <Box
            p="10"
            bgColor="white"
            rounded="md"
            border="2px"
            mt="10"
            borderColor="gray.300"
          >
            <Heading>Write a review</Heading>

            {errorProductReview && (
              <Message type="error">{errorProductReview}</Message>
            )}

            {
              userInfo ?(
                <form onSubmit={submitHandler}>
                <FormControl id='rating' mb='3'>
											<FormLabel>Rating</FormLabel>
											<Select
												placeholder='Select Option'
												value={rating}
												onChange={(e) => setRating(e.target.value)}>
												<option>Select...</option>
												<option value='1'>1 - Poor</option>
												<option value='2'>2 - Okay</option>
												<option value='3'>3 - Good</option>
												<option value='4'>4 - Very Good</option>
												<option value='5'>5 - Excellent</option>
											</Select>
										</FormControl>

                    <FormControl id='comment' mb='3'>
											<FormLabel>Comment</FormLabel>
											<Textarea
												value={comment}
												onChange={(e) => setComment(e.target.value)}>
                        </Textarea>
										</FormControl>

										<Button colorScheme='teal' type='submit'>
											Post Review
										</Button>

                </form>
              ):(
                <Message>
                  Please <Link as ={RouterLink} to = '/login'>login</Link>
                  to write a review
                </Message>
              )
            }
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductScreen;
