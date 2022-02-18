import type { NextPage } from 'next'
import Head from 'next/head'
import Dynamic from "next/dynamic"
import Image from 'next/image'
import { useState } from 'react';
import ManualTrainBox from '../components/trainBoxes/manualTrainBox';
import AutoTrainBoxObjectID from '../components/trainBoxes/autoTrainBoxObjectID';
import AutoTrainBoxTrainNum from '../components/trainBoxes/autoTrainBoxTrainNum';

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

    //<AutoTrainBoxTrainNum trainNum={'1'} trainDate={'14'} clickable={'true'}/>
    //<AutoTrainBoxObjectID objectID={'1190551'} clickable={'true'}/>

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

export default Home
