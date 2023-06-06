import React, { useEffect, useState } from 'react';
import Launch from './Launch';
import Dinner from './Dinner';
import BreakFast from './BreakFast';

const TabItem = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedProduct) => {
        const newProduct = [...cart, selectedProduct];
        setCart(newProduct);
    }

    const handleClickCart = () => {
        console.log('worked');
    }

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabsItem = [
        {
            label: 'Launch',
            content: <Launch


                cart={cart}
                handleAddToCart={handleAddToCart}
            ></Launch>

        },
        {
            label: 'Dinner',
            content: <Dinner></Dinner>
        },
        {
            label: 'Breakfast',
            content: <BreakFast
                key={product.index}
                product={product}
                handleCart={handleClickCart}
            ></BreakFast>
        }
    ];

    return (
        <div className='container mx-auto text-center'>
            <div className="flex flex-col text-center items-center">
                <div className="flex my-10 py-4">
                    {tabsItem.map((tabItem, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 mr-2 rounded ${activeTab === index ? 'bg-red-400 text-white' : 'text-gray-600'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tabItem.label}
                        </button>
                    ))}
                </div>
                {tabsItem[activeTab].content}
            </div>
        </div>
    );
};

export default TabItem;
