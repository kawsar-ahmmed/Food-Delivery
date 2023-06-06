import React, { useContext } from 'react';
import { BurgerContext } from '../../App';

const Dinner = () => {
    const [burger] = useContext(BurgerContext);
    const dinner = burger.dinner;
    // console.log(dinner)
    return (
        <div className=' min-w-full grid gap-4 grid-cols-3'>
            {
                Array.isArray(dinner) ? (
                    dinner.map((item) => (
                        <div className='lunch-items my-8 '>
                            <div className="items-full ">
                                <img src={item.imgUrl} alt="" className='img-fluid m-auto' />
                                <h2 className='text-2xl'>{item.title}</h2>
                                <p className='text-base text-orange-500'>${item.price}</p>
                                <button className='py-2 my-4 px-6 bg-orange-400 text-white rounded'>Add To Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // or any other appropriate loading indicator
                )
            }
        </div>
    );
};

export default Dinner;