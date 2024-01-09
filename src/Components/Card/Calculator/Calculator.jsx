import React from 'react'

export default function Calculator() {
  return (
    <footer className="my-3">
          <h1 className="col-8">Total price: <span id="totalPrice">0</span>$</h1>
          <div className="d-flex justify-content-around col-10 mx-auto">
            <button id="resetBtn">Reset</button>
            <button id="invoice">Invoice</button>
          </div>
    </footer>
  )
}
