import React, { useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    //get foodlist array
    const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item, index)=>{
            //filter the types of food based on what we click
            if(category==="All" || category===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
          })}
        </div>
    </div>
  )
}

export default FoodDisplay
