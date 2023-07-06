import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Item from './Item';




function Cart({ cartItems, clearCart, removeItemFromCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [showPopup, setShowPopup] = useState(false);


  const handleClearCart = () => {
    clearCart();
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length > 0) {
      setShowPopup(true);
    }
  };

  const handleConfirmarCompra = () => {

    setShowPopup(false);
    clearCart();

  };



  return (
    <div className="cart">
      <h2>Meu Carrinho</h2>
      {cartItems.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td >{item.quantity}</td>
                <td ><button className="popup-button cancel-button" onClick={() => removeItemFromCart(item.id)} ><FaTrash /></button></td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: R${totalPrice.toFixed(2)}</h3>
      <button className="btnf" onClick={handleFinalizarCompra}>Finalizar Compra</button>

      <button className="btnc" onClick={handleClearCart}>Limpar Carrinho</button>

      <img src="bandeiras.png" alt="pagamento" className="cartoes" />


      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3 className="popup-title">Agradecemos por escolher a LojaVegg! Sua compra será finalizada após informar o pagamento!</h3>
            <h3 className="popup-total">Total: R${totalPrice.toFixed(2)}</h3>
            <p className="popup-text">Escolha o método de pagamento para concluir a compra:</p>
            <div className="popup-buttons">
              <button className="popup-button payment-button" onClick={handleConfirmarCompra}>
                Pagar Agora
              </button>
              <button className="popup-button cancel-button" onClick={() => setShowPopup(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Cart;
