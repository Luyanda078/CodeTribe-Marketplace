// src/pages/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      dispatch(checkoutCart());
      alert("Checkout successful!");
    } else {
      alert("Your cart is empty.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <p>{item.name}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white py-2 px-6 rounded">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

// feat: Complete core UI/UX for marketplace app

// - Implement Admin Panel for product management (add, delete products)
// - Add Cart with checkout confirmation and removal options
// - Create Order History page for user purchase records
// - Add PrivateRoute for authentication-based route protection
// - Integrate search and filtering in Product Listing