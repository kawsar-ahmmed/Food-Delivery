import React, { useContext } from 'react';
import { BurgerContext } from '../../App';
import './TabItem.css'
import { Col } from 'react-bootstrap';

const Launch = () => {
    const [burger] = useContext(BurgerContext);
    const lunchItems = burger.lunch;
    console.log(lunchItems)
    return (
        <div className='grid grid-cols-3  gap-x-14'>
            {
                Array.isArray(lunchItems) ? (
                    lunchItems.map((item) => (
                        <Col>
                            <div className='lunch-items'>
                                <img src={item.imgUrl} alt="" className='img-fluid m-auto' />
                                <h2>{item.title}</h2>
                                <p>{item.price}</p>
                            </div>
                        </Col>
                    ))
                ) : (
                    <p>Loading...</p> // or any other appropriate loading indicator
                )
            }
        </div>
    );
};

export default Launch;