import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTax, setDiscount, setShipping, setProductsTotalPrice, calculateTotalPrice } from '../../../Features/Cart/CartReducer'

export default function Calculator({products}) {
  const dispatch = useDispatch();
  const {totalPrice, productsTotalPrice } = useSelector((state) => state.calculator)

  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.qty, 0);
    dispatch(setProductsTotalPrice(total));
  }, [products]);

  const handleInputChange = (inputType, value) => {
    const numericValue = value === '' ? 0 : value;
    switch (inputType) {
      case 'tax':
        dispatch(setTax(parseFloat(numericValue)));
        break;
      case 'discount':
        dispatch(setDiscount(parseFloat(numericValue)));
        break;
      case 'shipping':
        dispatch(setShipping(parseFloat(numericValue)));
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
            <h1 className="col-8">Total price: <span id="totalPrice">{totalPrice===0 ? productsTotalPrice : totalPrice}</span>$</h1>
            <div className="d-flex justify-content-around col-10 mx-auto">
              <button id="resetBtn">Reset</button>
              <button id="invoice">Invoice</button>
            </div>
      </footer>
    </>
  )
}
