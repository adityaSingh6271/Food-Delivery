import React, { useContext } from 'react'
import '../FoodDisplay/FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItems/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    console.log("FoodDisplay food_list:", food_list);
    console.log("Selected category:", category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
