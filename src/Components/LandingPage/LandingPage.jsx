import { useEffect, useState } from "react"
import Cart from "../Card/Cart"
import Products from "../Products/Products"

export default function LandingPage() {
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    setCartProducts(storedProducts)
  }, [])

  const updateCartProducts = (newProduct) => {
    setCartProducts([...cartProducts, newProduct]);
  };

  return (
    <main className="d-lg-flex justify-content-center align-items-center gap-1">
      <Cart setCartProducts={setCartProducts} cartProducts={cartProducts}/>
      <Products updateCartProducts={updateCartProducts} />
    </main>
  )
}
