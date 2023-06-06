import React, { useContext, useEffect } from 'react';
import { BurgerContext } from '../../App';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TabItem from '../TabItem/TabItem';



const Home = () => {
    const [burger, setBurger] = useContext(BurgerContext)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBurger(data))
    }, [setBurger])

    return (
        <>
            <div className='header-full'>
                <div className=" container mx-auto text-center py-10 bg-no-repeat bg-center">
                    <div>
                        <div className="flex items-center justify-center mx-auto py-4" style={{ "height": "80vh" }}>
                            <div className="h-14 search-main w-1/3 bg-white rounded-full flex justify-between px-5">
                                <input type="text" placeholder="Search" className=" border-none w-full focus:border-none bg-transparent px-4 border border-gray-300 focus:outline-none focus:ring-none focus:border-transparent" />
                                <button className="text-slate-500 rounded-r-lg py-2 px-4 ml-1">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <TabItem></TabItem>
        </>

    );
};

export default Home;