import Head from 'next/head';
import Dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import AutoTrainBoxTrainNum from '../components/trainBoxes/autoTrainBoxTrainNum';

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
                    <details class="content">
                        <summary>
                            Open Collapsible
                        </summary>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <AutoTrainBoxTrainNum trainNum="1" trainDate="5" clickable={true}/>
                        <Link href="../trains/new">
                            <a className="trainBoxLink">
                                <p className="card trainCard newTrain clickableThing">+ New Train</p>    
                            </a>
                        </Link>
                    </details>
                </section>
            </main>

            <script src="../scripts/menu.js"></script>
            
            <MapWithNoSSR />
        </div>
    )
    
    /*
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
    */
})

export default Home;
