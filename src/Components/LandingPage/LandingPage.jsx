import Cart from "../Card/Cart"
import Products from "../Products/Products"

export default function LandingPage() {
  return (
    <main className="d-lg-flex justify-content-center align-items-center gap-1">
      <Cart/>
      <Products/>
    </main>
  )
}
