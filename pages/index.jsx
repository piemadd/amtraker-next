import Head from 'next/head';
import Dynamic from 'next/dynamic';
import { useState } from 'react';

import TagsBlock from '../components/tags'

const Home = (() => {
    const MapWithNoSSR = Dynamic(() => import('../components/map'), {
        ssr: false
    });

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };
    
    const activeDrawer = isActive ? null : "drawerUp";
    
    return (
        <div>
            <TagsBlock />
            <main className="screen">
                <section className="searchAlign">
                    <section className="searchBar">
                        <img src="../icons/icon.svg" alt="Amtraker Logo" className="icon logo"></img>
                        <input type="text" id="searchBox" name="searchBox" placeholder="Search Trains"></input>
                        <img src="../icons/borger.svg" alt="Hamburger Menu" className="icon borger"></img>
                    </section>
                </section>
            </main>
            <MapWithNoSSR />
        </div>
    )
})

export default Home;
