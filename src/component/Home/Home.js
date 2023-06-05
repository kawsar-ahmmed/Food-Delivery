import React, { useContext, useEffect } from 'react';
import { BurgerContext } from '../../App';

const Home = () => {
    const [burger, setBurger] = useContext(BurgerContext)
    useEffect(()=> {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setBurger(data))
    },[setBurger])

    return (
        <div className='container mx-auto text-center py-10'>
            this is home
        </div>
    );
};

export default Home;