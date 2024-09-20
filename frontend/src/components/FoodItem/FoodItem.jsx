import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    //for useState for each image
    //const [itemCount, setItemCount] = useState(0)

    //to get access the functionality from storecontext
    //all those cart will be managed by storecontext
    const {cartItems, addToCart, removeFromcart} = useContext(StoreContext);
  
  //count for cart
  //if 0, return 1
  //if 1, return div
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
              {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{ cartItems[id] }</p>
                    <img onClick={()=>addToCart(id)} src={ assets.add_icon_green } alt="" />
                  </div>
              }
        </div> 
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
