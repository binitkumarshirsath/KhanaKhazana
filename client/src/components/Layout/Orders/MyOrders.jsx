import React from 'react'
import Layout from '../Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import OrderItem from './OrderItem'

export default function MyOrders() {
  const [orderHistory , setOrderHistory] = useState([]);
  
  const getMyOrders = async () => {
    try {
      const email = localStorage.getItem('email');
      const orderData = await axios.post('/api/myOrders', { email });
      const { data } = orderData;
      
      setOrderHistory(data.data.orders);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <Layout>
      <OrderItem orders={orderHistory} />
    </Layout>
  )
}
