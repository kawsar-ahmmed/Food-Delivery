import React, { useContext } from 'react';
import { BurgerContext } from '../../App';
import './TabItem.css'
import AddToCart from './AddToCart/AddToCart';



const Launch = ({ cart, handleAddToCart }) => {
    const [burger] = useContext(BurgerContext);
    const lunchItems = burger.lunch;
    const lunchProduct = cart;

    console.log(cart)

    return (
        <div className='min-w-full grid gap-4 grid-cols-3'>
            {Array.isArray(lunchItems) ? (
                lunchItems.map((item) => (
                    <div className='lunch-items my-8' key={item.id}>
                        <img src={item.imgUrl} alt='' className='img-fluid m-auto' />
                        <h2 className='text-2xl'>{item.title}</h2>
                        <p className='text-base text-orange-500'>${item.price}</p>
                        <button onClick={() => handleAddToCart(item)} className='py-2 my-4 px-6 bg-orange-400 text-white rounded'>
                            Add To Cart
                        </button>
                    </div>
                ))
            ) : (
                <p>Loading...</p> // or any other appropriate loading indicator
            )}
            <AddToCart
            cart={cart}
            ></AddToCart>
        </div>
    );

};

export default Launch;
