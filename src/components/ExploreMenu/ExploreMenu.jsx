import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
function ExploreMenu() {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className='explre-menu-text'>Choose from diverse menu featurnig a delectable array of dishes.Our mission is to satisfy tour craving and elevate your dining experinece,
             one delicius meal at time.</p>
        <div className="explre-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div key={index} className="explore-menu-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
