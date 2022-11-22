import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination!</h1>      
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src="images/img-2.jpg"
                        text = "Explore the Niagara Waterfall"
                        label = "Adventure"
                        path = "/services"
                    />
                    <CardItem 
                        src="images/img-1.jpg"
                        text = "Explore the Amazing mountain in the winter"
                        label = "Beautiful Winter"
                        path = "/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src="images/img-3.jpg"
                        text = "Explore the the river in the middle of Amazon Jungle"
                        label = "Adventure"
                        path = "/services"
                    />
                    <CardItem 
                        src="images/img-4.jpg"
                        text = "Explore the North Pole Rainbow"
                        label = "Winter"
                        path = "/products"
                    />
                    <CardItem 
                        src="images/img-5.jpg"
                        text = "Crazy Beach in North America "
                        label = "Beautiful Fall"
                        path = "/sign-up"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
