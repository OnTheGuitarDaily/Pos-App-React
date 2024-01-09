import CartItems from './CartItems/CartItems'

export default function Cart() {
  return (
    <section className='cart col-12 col-lg-6 mt-3 py-3  mx-auto pt-3"'>
      <div className="d-flex col-12 container px-3 gap-3 align-items-center">
          <h1>Cart</h1>
      </div>
      <CartItems/>
    </section>
  )
}
