import React, { useContext } from 'react'
import './PlaceOrder.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const PlaceOrder = () => {
  //pass the variable
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>

      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>

        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street'/>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'/>
        </div>

        <input type="text" placeholder='Phone Number' />

      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>RM{getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivary Fee</p>
            <p>RM{getTotalCartAmount()===0?0:2}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <p>RM{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          
          <button>PROCEED TO PAYMENT</button>
          
        
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder
