import CartItems from './CartItems/CartItems'

export default function Cart({cartProducts, setCartProducts}) {

  return (
    <section className='col-12 container py-3 col-lg-10 col-xl-6'>
      <div className="d-flex col-12 container px-3 gap-3 align-items-center">
          <h1>Cart</h1>
      </div>
      <CartItems setCartProducts={setCartProducts} products = {cartProducts}/>
    </section>
  )
}
