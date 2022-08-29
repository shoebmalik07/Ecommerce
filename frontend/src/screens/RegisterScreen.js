import React from 'react'
import {Button,Flex,FormControl,FormLabel,Heading,Input,Link,Spacer,Text} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {Link as RouterLink, useNavigate, useSearchParams} from 'react-router-dom'
import Message from '../components/Message'
import {register} from '../actions/userAction'

const RegisterScreen = () => {

  const dispatch  = useDispatch()
  const navigate= useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect') || '/'

  const userRegister = useSelector((state)=>state.userRegister)
  const {loading,error,userInfo} = userRegister

  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate,userInfo, redirect])

  const SubmitHandler =(e)=>{
    e.preventDefault()
    if(password!==confirmPassword){
      setMessage('password do not match')
    }else{
      dispatch(register(name,email,password))
    }

  }

  return (
    <Flex alignItems='center' justifyContent='center' w='full'  py='5'>
    <FormContainer>
      <Heading as='h1' mb='8' fontSize='3xl'>
        Register
      </Heading>

      {error && <Message type='error'>{error}</Message>}
      {message&& <Message type='error'>{message}</Message>}

      <form onSubmit={SubmitHandler}>
      <FormControl id ='name'>
      <FormLabel htmlFor='name'> Name</FormLabel>
      <Input
        id='name'
        type='text'
        placeholder='your full name'
        value = {name}
        onChange = {(e)=>{setName(e.target.value)}}
      />
      </FormControl>

      <Spacer h='3'/>

      <FormControl id='email'>
      <FormLabel htmlFor='email'> Email</FormLabel>
      <Input
        id = 'email'
        type ='email'
        placeholder='your email'
        value = {email}
        onChange = {(e)=>{setEmail(e.target.value)}}
      />
      </FormControl>

      <Spacer h='3'/>

      <FormControl id='password'>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <Input
        id='password'
        type='password'
        placeholder='**********'
        value={password}
        onChange = {(e)=>{setPassword(e.target.value)}}
      />
      </FormControl>

      <Spacer h='3'/>
      <FormControl id = 'confirmPassword'>
        <FormLabel htmlFor='confirmPassword'> Confirm Password</FormLabel>
        <Input
          id = 'confirmPassword'
          type='password'
          placeholder='**********'
          value = {confirmPassword}
          onChange = {(e)=>{setConfirmPassword(e.target.value)}}
        />
      </FormControl>
        <Button type='submit' colorScheme='teal' mt='4' isLoading={loading}>Register</Button>
      </form>
      
      <Flex>
      <Text fontWeight='semibold'>
        Already a Customer? <Link as = {RouterLink} to ='/login'>click here to login</Link>
        </Text>
      </Flex>

    </FormContainer>

    </Flex>
  )
}

export default RegisterScreen