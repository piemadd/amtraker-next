import type { NextPage } from 'next'
import Head from 'next/head'
import Dynamic from "next/dynamic"
import Image from 'next/image'
import { useState } from 'react';

import TagsBlock from '../components/tags'
//import styles from '../styles/Home.module.css'

const Home: NextPage = (() => {
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
                <section className="searchBar">
                    <img src="../icons/icon.svg" alt="Amtraker Logo" className="icon logo"></img>
                    <input type="text" id="searchBox" name="searchBox" placeholder="Search Trains"></input>
                    <img src="../icons/borger.svg" alt="Hamburger Menu" className="icon borger"></img>
                </section>
                <section onClick={ToggleClass} className="drawerButton">
                    <h1>Your Trains</h1>
                </section>
                <section id="drawer" className={activeDrawer + ' drawer'}>
                    <section className="drawerTitle">
                        <h1>Your Trains</h1>
                        <div style={{flex: 69}}></div>
                        <h1 className="exit" onClick={ToggleClass}>✕</h1>
                    </section>
                    
                    <article className="card">
    		            <div className="meta">
    			            <div className="title">
    				            <h3>Sunset Limited</h3>
    				            <div className="status early">Early</div>
    			            </div>
    			            <p className="route">Jan 31, 2022 - NOL --&gt; LAX</p>
    			            <p className="route"><span className="tag">Speed: </span>0.00 mph</p>
    			            <p className="location"><span className="tag">Next Stop:</span> San Antonio (SAS)</p>
    		                </div>
                    </article>
                </section>
            </main>
            <MapWithNoSSR />
        </div>
    )
})

export default Home
