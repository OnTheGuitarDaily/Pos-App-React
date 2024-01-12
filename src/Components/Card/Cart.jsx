import CartItems from './CartItems/CartItems'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Cart({cartProducts, setCartProducts}) {

  return (
    <section className='col-12 container py-3 col-lg-10 col-xl-6'>
      <header className="d-flex col-12 container px-3 align-items-center">
          <h1>
            <ShoppingBagIcon sx={{ fontSize: 40 }} color="primary"/>
            Cart
          </h1>
      </header>
      <CartItems setCartProducts={setCartProducts} products = {cartProducts}/>
    </section>
  )
}
