import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



function Item({ item, addItemToCart, removeItemFromCart }) {
  const { id, name, descricao, price, image } = item;


  const handleAddToCart = () => {
    addItemToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <h4 className="item-title">{name}</h4>
      <p className="item-description">{descricao}</p>
      <p className="item-price">Preço: R${price.toFixed(2)}</p>
      <button className="btni" onClick={handleAddToCart}> <FontAwesomeIcon icon={faPlus} /></button>
      <button className="btnir" onClick={handleRemoveFromCart}> <FontAwesomeIcon icon={faMinus} /></button>
    </div>
  );
};

export default Item;