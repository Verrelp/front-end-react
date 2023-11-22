import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Cart from '@/components/Cart';
import Menu from '@/components/Menu';
import { useRouter } from 'next/router';

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const router = useRouter();

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  const handleAddToCart = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    setSelectedItems((prev) => [...prev, newItem]);
    setCartItemCount((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar onToggleCart={handleToggleCart} cartItemCount={cartItemCount} />
      <Header />
      {showCart && <Cart items={selectedItems} updateCartItemCount={updateCartItemCount} />}
      <Menu onAddToCart={handleAddToCart} />
    </div>
  );
}
