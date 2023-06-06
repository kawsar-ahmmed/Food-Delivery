import React from 'react';

const AddToCart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            {
                Array.isArray(cart) ? (
                    cart.map((item) => (
                        console.log(item.title)
                        // <div className="item-main">
                        //     <h2>{item.title}</h2>
                        // </div>
                    ))
                ) : (
                    <p>Loading...</p> // or any other appropriate loading indicator
                )
            }
        </div>
    );
};

export default AddToCart;
