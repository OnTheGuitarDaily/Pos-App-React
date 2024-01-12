import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import Calculator from '../Calculator/Calculator';

export default function CartItems({ products, setCartProducts }) {

  useEffect(() => {
    setCartProducts(products);
  }, [products]);


  const handleQtyChange = (productId, newQty) => {
    const updatedCartProducts = products.map((item) => {
      if (item.id === productId) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  }

  const handleDelete = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove this item from the cart',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCartProducts = products.filter((item) => item.id !== productId);
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
        setCartProducts(updatedCartProducts);
        Swal.fire('Removed!', 'The item has been removed from the cart.', 'success');
      }
    });
  };


  return (
    <>
      {products.length === 0 ? (
        <div id="cartItems" className="my-2 col-12 d-flex justify-content-center p-2 py-5">
          <h1>No items in cart!</h1>
        </div>
      ) : (
        <>
          <header className="d-flex mt-3 gap-3 col-10 mx-auto justify-content-around">
            <div>
              <h6>Product</h6>
            </div>
            <div>
              <h6>Price</h6>
            </div>
            <div>
              <h6>Qty</h6>
            </div>
            <div>
              <h6>Subtotal</h6>
            </div>
            <div>
              <h6>Action</h6>
            </div>
          </header>
          <main className="ChoosedItems py-3 d-flex flex-column gap-3 align-items-center">
            {products.map((item) => (
              <article key={item.id} className="col-10 d-flex gap-3 mx-auto justify-content-start">
                <div className="col-2 col-sm-3 col-lg-3">
                  <p>{item.name} #{item.id}</p>
                </div>
                <div className="col-1">
                  <p>{item.price}$</p>
                </div>
                <div className="col-3 d-flex gap-2">
                  <button
                    className="decrement-btn"
                    onClick={() => { handleQtyChange(item.id, item.qty - 1) }}
                  >
                    -
                  </button>
                  <div className="qty">{item.qty}</div>
                  <button
                    className="increment-btn"
                    onClick={() => { handleQtyChange(item.id, item.qty + 1) }}
                  >
                    +
                  </button>
                </div>
                <div className="col-2">
                  <p className="subtotal">{item.price * item.qty}$</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </article>
            ))}
          </main>
          <Calculator products={products} setCartProducts={setCartProducts}/>
        </>
      )}
    </>
  );
}
