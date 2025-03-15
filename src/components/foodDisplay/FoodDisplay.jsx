import React from 'react'
import "./FoodDisplay.css"
import { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
function FoodDisplay() {
    const {food_list} = useContext(StoreContext)
  return (
    <div>
      
    </div>
  )
}

export default FoodDisplay
