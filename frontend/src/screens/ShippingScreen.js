import React from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5">
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <Heading as="h2" mb="8" fontSize="3xl">
          Shipping
        </Heading>
        <form onSubmit={submitHandler}>
          {/* Address */}
          <FormControl id="address">
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              id="address"
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </FormControl>

          <Spacer h="3" />

          {/* city */}
          <FormControl id="city">
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              type="text"
              placeholder="Your city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="postalCode">
            <FormLabel htmlFor="postalCode">PostalCode</FormLabel>
            <Input
              id="postalCode"
              type="text"
              placeholder="Your postalCode"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="country">
            <FormLabel htmlFor="country">Country</FormLabel>
            <Input
              id="country"
              type="text"
              placeholder="Your country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" mt="4">
            Continue
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default ShippingScreen;
