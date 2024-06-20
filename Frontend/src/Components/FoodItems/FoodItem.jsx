import React, { useContext } from 'react'
import '../FoodItems/FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
      <div className='food-item'>
          <div className="food-item-img-container">
              <img className='food-item-image' src={url + "/images/" + image} alt={name} />
              {!cartItems[id]
                  ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
                  : <div className='food-item-counter'>
                      <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                      <p className='cartitemsp'>{cartItems[id]}</p>
                      <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
                  </div>
              }
          </div>
          <div className="food-item-info">
              <div className="food-item-name-rating">
                  <p className='namewe'>{name}</p>
                  <img className='ratingstars' src={assets.rating_starts} alt="Rating" />
              </div>
              <p className="food-item-desc">{description}</p>
              <p className="food-item-price">${price}</p>
          </div>
      </div>
  )
}


export default FoodItem