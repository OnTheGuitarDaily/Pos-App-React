import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTax,
  setDiscount,
  setShipping,
  setProductsTotalPrice,
  calculateTotalPrice,
  reset
} from '../../../Features/Cart/CartReducer';
import Swal from 'sweetalert2';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ReceiptIcon from '@mui/icons-material/Receipt';

export default function Calculator({ products, setCartProducts }) {
  const dispatch = useDispatch();
  const { totalPrice, productsTotalPrice, tax, discount, shipping } = useSelector((state) => state.calculator);
  const calculator = useSelector((state) => state.calculator)
  console.log(calculator)


  useEffect(() => {
    const total = products.reduce((price, item) => price + item.price * item.qty, 0);
    dispatch(setProductsTotalPrice(total));
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dispatch, tax, discount, shipping, productsTotalPrice]);

  const handleReset = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to reset the cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartProducts([]);
        dispatch(reset())
        localStorage.removeItem('cartProducts');
        Swal.fire('Reset!', 'The cart has been reset', 'success');
      }
    });
  };

  const handleInvoice = () => {
    Swal.fire({
      title: 'Invoice',
      html: `
        <p><strong>Tax:</strong> ${tax}%</p>
        <p><strong>Discount:</strong> ${discount}%</p>
        <p><strong>Shipping:</strong> ${shipping}$</p>
        <p><strong>Total Price:</strong> ${totalPrice === 0 ? productsTotalPrice : totalPrice }$</p>
      `,
      icon: 'success',
    });
  };

  const handleInputChange = (inputType, value) => {
    const numericValue = value === '' ? 0 : parseFloat(value);
    switch (inputType) {
      case 'tax':
        dispatch(setTax(numericValue));
        break;
      case 'discount':
        dispatch(setDiscount(numericValue));
        break;
      case 'shipping':
        dispatch(setShipping(numericValue));
        break;
      default:
        break;
    }

    dispatch(calculateTotalPrice());
  };

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap gap-3 col-10 mx-auto">
        <div className="d-flex flex-column col-4">
          <label>Tax %</label>
          <input
            id="taxInput"
            type="number"
            min="0"
            step="0.01"
            defaultValue={0}
            onChange={(e) => handleInputChange('tax', e.target.value)}
          />
        </div>
        <div className="d-flex flex-column col-4">
          <label>Discount %</label>
          <input
            id="discountInput"
            type="number"
            min="0"
            step="0.01"
            defaultValue={0}
            onChange={(e) => handleInputChange('discount', e.target.value)}
          />
        </div>
        <div className="d-flex flex-column col-4">
          <label>Shipping:</label>
          <input
            id="shippingInput"
            type="number"
            min="0"
            step="0.01"
            defaultValue={0}
            onChange={(e) => handleInputChange('shipping', e.target.value)}
          />
        </div>
      </div>
      <footer className="my-3">
        <h1 className="col-8 px-3">Total price: <span id="totalPrice">{totalPrice === 0 ? productsTotalPrice : totalPrice}</span>$</h1>
        <div className="d-flex justify-content-around col-10 mx-auto">
          <button onClick={handleReset} id="resetBtn">
            <RotateLeftIcon/> Reset
          </button>
          <button onClick={handleInvoice} id="invoice">
            <ReceiptIcon/> Invoice
          </button>
        </div>
      </footer>
    </>
  );
}
