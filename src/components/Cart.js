import React,{useContext , useState , useEffect} from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';
const CartPage = () => {
  const {cart , setCart } = useContext(Cart);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
    <div className='productContainer'>
      {cart.map((p)=> <SingleProduct prod={p}/>

    )}
    </div>
    </div>
  )
}

export default CartPage
