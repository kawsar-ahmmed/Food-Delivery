import React, { useState } from 'react';
import Launch from './Launch';

const TabItem = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabsItem = [
        {
            label: 'Launch',
            content: <div>
                <Launch></Launch>
            </div>
        },
        {
            label: 'Dinner',
            content: <div>Dinner tab content goes here</div>
        },
        {
            label: 'Breakfast',
            content: <div>Breakfast tab content goes here</div>
        }
    ];
    return (
        <div className=' container mx-auto text-center'>
            <div className="flex flex-col text-center items-center">
                <div className="flex mb-4 py-4">
                    {tabsItem.map((tabsItem, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 mr-2 rounded ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tabsItem.label}
                        </button>
                    ))}
                </div>
                {tabsItem[activeTab].content}
            </div>
        </div>
    );
};

export default TabItem;