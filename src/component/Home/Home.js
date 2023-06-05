import React, { useContext, useEffect } from 'react';
import { BurgerContext } from '../../App';
import headerImg from '../../Assets/bannerbackground.png'

const Home = () => {
    const [burger, setBurger] = useContext(BurgerContext)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBurger(data))
    }, [setBurger])

    return (
        <div className='container mx-auto text-center py-10 bg-no-repeat bg-center bg[headerImg]'>
            <div className="header-full">
                <div>
                    <div class="flex items-center justify-center mx-auto py-4 h-screen">
                        <div className=" h-14 search-main w-1/3 bg-slate-100 rounded-full flex justify-between px-5">
                            <input type="text" placeholder="Search" class=" w-full focus: border-none bg-transparent px-4 border border-gray-300 focus:outline-none focus:ring-none focus:ring-none focus:border-transparent" />
                            <button class=" text-slate-500 rounded-r-lg py-2 px-4 ml-1">
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;