import React from 'react'
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,Flex} from '@chakra-ui/react'
import {IoCaretForwardSharp} from 'react-icons/io5'
import {Link as RouterLink} from 'react-router-dom'


const CheckoutSteps = ({step1,step2,step3,step4}) => {
  return (
    <Flex justifyContent='center' mb='8'>
    <Breadcrumb separator={<IoCaretForwardSharp color='gray.800'/>}>
      {/* step 1 */}
      <BreadcrumbItem>
        {
          step1 ? (
            <BreadcrumbLink>Login</BreadcrumbLink>
          ):(
            <BreadcrumbLink
            disabled
            color='gray.400'
            _hover={{textDecor:'none'}}
            >Login</BreadcrumbLink>
          )
        }
      </BreadcrumbItem>
      {/* step 2 */}
      <BreadcrumbItem>
        {
          step2 ? (
            <BreadcrumbLink as = {RouterLink} to = '/shipping'>shipping</BreadcrumbLink>
          ):
          (
            <BreadcrumbLink
            disabled
            color='gray.400'
            _hover={{textDecor:'none'}}>shipping</BreadcrumbLink>
          )
        }
      </BreadcrumbItem>
      {/* step 3 */}
      <BreadcrumbItem>
        {
          step3 ? (
            <BreadcrumbLink as = {RouterLink} to = '/payment'>payment</BreadcrumbLink>
          ):
          (
            <BreadcrumbLink
            disabled
            color='gray.400'
            _hover={{textDecor:'none'}}>payment</BreadcrumbLink>
          )
        }
      </BreadcrumbItem>

      {/* step 4 */}
      <BreadcrumbItem>
        {
          step4 ? (
            <BreadcrumbLink as = {RouterLink} to = '/placeorder'>placeorder</BreadcrumbLink>
          ):
          (
            <BreadcrumbLink
            disabled
            color='gray.400'
            _hover={{textDecor:'none'}}>placeorder</BreadcrumbLink>
          )
        }
      </BreadcrumbItem>
    </Breadcrumb>

    </Flex>
    
  )
}

export default CheckoutSteps