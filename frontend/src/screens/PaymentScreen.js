import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { savePaymentMethod } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;

  const [paymentMethodRadio, setPaymentMethodRadio] = useState(
    paymentMethod || "paypal"
  );

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('i reached here')
    dispatch(savePaymentMethod(paymentMethodRadio));
    navigate("/placeorder");
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5">
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <Heading as="h2" mb="8" fontSize="3xl">
          Payment Method
        </Heading>

        <form onSubmit={submitHandler}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Select Methods</FormLabel>
            <RadioGroup
              defaultValue={paymentMethodRadio}
              value={paymentMethodRadio}
              onChange={setPaymentMethodRadio}
            >
              <HStack space="24px">
                <Radio value="paypal">PayPal or Credit/Debit Card</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <Spacer h="3" />

          <Button type="submit" colorScheme="teal" mt="4">
            Continue
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default PaymentScreen;
