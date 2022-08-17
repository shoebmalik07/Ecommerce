import {useParams, useSearchParams} from 'react-router-dom'


const CartScreen =()=>{
    const {id} = useParams()

    const[searchParams] = useSearchParams()

    const qty = searchParams.get('qty')
    console.log(qty)

    return(
        <>
            <p>cart screen</p>
        </>
    )
}
export default CartScreen