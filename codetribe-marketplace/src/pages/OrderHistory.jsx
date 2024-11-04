// src/pages/OrderHistory.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory } from '../redux/slices/orderSlice';

function OrderHistory() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);

  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No previous orders.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="border-b py-4">
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.total}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
