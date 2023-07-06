import React, { useState, useEffect } from 'react';
import './App.css';
import Item from './Item';
import Cart from './Cart';






function App  ()  {
  const [cartItems, setCartItems] = useState([]);


 //Vai add um item ao carrinho
  const addItemToCart = (item) =>  {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // Se o item já estiver no carrinho, atualiza a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Caso contrário, adiciona o item ao carrinho
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };
 
  
//vai remover um item do carrinho
  const removeItemFromCart= (itemId) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity > 1) {
        // Se a quantidade for maior que 1, diminue a quantidade em 1
        updatedCartItems[existingItemIndex].quantity -= 1;
      } else {
        // Caso contrário, remove o item do carrinho
        updatedCartItems.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

 

  return (
    <div className="app">
      <div className="items">
        <h1 className="h1">LojaVegg</h1>
        <div className="item-list">
          <Item
            item={{ id: 1, name: 'Delineador', descricao: 'Delineador 395 - Black 3ML - Vegano e Natural', price: 44.00, image: 'produtos/delineador.png' }}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
           
           
          />
          <Item
            item={{ id: 2, name: 'Kit Lápis',descricao: 'kit lápis de olho + sobrancelha - mia make vegano', price: 42.00, image: 'produtos/lapis.png' }}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            
          />
          <Item
            item={{ id: 3, name: 'Gloss',descricao: 'Gloss Lip Volumoso Vegano - MAX LOVE', price: 31.00, image: 'produtos/gloss.jpg' }}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            
          />
          <Item
            item={{ id: 4, name: 'Hidratante Facial', descricao: 'Loção Hidratante Vegano Natural Coco 200ml - Veegano', price: 59.99, image: 'produtos/hidratante.jpeg' }}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
           
          />
        </div>
      </div>

      


      <Cart cartItems={cartItems} setCartItems={setCartItems} clearCart={clearCart} removeItemFromCart={removeItemFromCart} />

    </div>
  );
};

export default App;