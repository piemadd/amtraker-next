import Head from 'next/head';
import Dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import AutoTrainBoxTrainNum from '../components/trainBoxes/autoTrainBoxTrainNum';
import AboutSection from '../components/aboutSection';

import TagsBlock from '../components/tags'

const Home = (() => {

    const router = useRouter()
    
    const MapWithNoSSR = Dynamic(() => import('../components/map'), {
        ssr: false
    });

    const [trainData, setTrainData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = ((e) => {
        setShowAll(e.target.checked)
    })

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const localParamsTemp = Object.fromEntries(urlSearchParams.entries());
        
        if (localParamsTemp.delete) {
            let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
            savedTrainsList = JSON.parse(savedTrainsList);
            
            let deleteString = `${localParamsTemp.n}-${localParamsTemp.d}`;
            delete savedTrainsList[deleteString];
            localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
            router.replace('/');
        }

        if (localParamsTemp.add) {
            let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
            savedTrainsList = JSON.parse(savedTrainsList);
    
            savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] = savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] ? savedTrainsList[`${localParamsTemp.n}-${localParamsTemp.d}`] : [];
    
            localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));

            router.replace('/');
        }

        let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
        savedTrainsList = JSON.parse(savedTrainsList);

        let trainsList = Object.keys(savedTrainsList);

        console.log(savedTrainsList)
        
        for (let i = 0; i < trainsList.length; i++) {
            console.log(trainsList[i].split('-')[1] < new Date().getDate() - 3)
            console.log(trainsList[i].split('-')[1] > new Date().getDate() + 10)
            
            if (trainsList[i].split('-')[1] < new Date().getDate() - 3 || trainsList[i].split('-')[1] > new Date().getDate() + 10) {
                
                console.log('yeet ' + trainsList[i])
                
                delete savedTrainsList[trainsList[i]];
            }
        }

        console.log(savedTrainsList)

        localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
    }, [])

    //updating trains and putting on map
    useEffect(() => {
        let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
        savedTrainsList = JSON.parse(savedTrainsList);

        console.log('client')
        console.log("showAll: " + showAll + "(" + typeof showAll + ")")
        console.log(trainData)

        if (showAll) { //i stg...

            console.log('oh yeah use my data daddy')
            
            fetch('https://api.amtraker.com/v1/trains')
                .then((res) => res.json())
                .then((receivedTrainData) => {

                    const finalTrainsList = [];
                    const finalTrainsKeys = Object.keys(receivedTrainData)

                    for (let i = 0; i < finalTrainsKeys.length; i++) {
                        const tempTrainData = receivedTrainData[finalTrainsKeys[i]];
                        for (let j = 0; j < tempTrainData.length; j++) {
                            finalTrainsList.push(tempTrainData[j]);
                            console.log(finalTrainsList.length)
                        }
                    }

                    console.log(finalTrainsList)

                    setTrainData(finalTrainsList);
                })
        } else {

			setTrainData([]);
			
            let trainKeys = Object.keys(savedTrainsList);
            for (let i = 0; i < trainKeys.length; i++) {
                console.log(trainKeys[i])
                fetch(`https://api.amtraker.com/v1/trains/${trainKeys[i].split('-')[0]}`)
                    .then((res) => res.json())
                    .then((receivedTrainData) => {
    
                        for (let j = 0; j < receivedTrainData.length; j++) {
                            if (new Date(receivedTrainData[j].origSchDep).getDate() == parseInt(trainKeys[i].split('-')[1])) {
                                setTrainData(trainData => [...trainData, receivedTrainData[j]]);
                            }

                            console.log('setting train data for only saved trains')
                            
                            console.log(trainData)
                        }
                    })
            }
        }

		console.log(trainData)
        
    }, [showAll]);

    console.log('server')
    console.log("showAll: " + showAll + "(" + typeof showAll + ")")
    console.log(trainData)
    
    return (
        <div>
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <TagsBlock />
            <main className="screen">
                <section className="trainsBarAlign">
                    <details className="content">
                        <summary>
                            Your Trains
                        </summary>
                        {
                            trainData.map((entry) => {
                                return <AutoTrainBoxTrainNum key={`${entry.trainNum}-${new Date(entry.origSchDep).getDate()}`} trainNum={entry.trainNum} trainDate={new Date(entry.origSchDep).getDate()} clickable={true}/>
                            })
                        }
                        
                        <Link href="../trains/new">
                            <a className="trainBoxLink">
                                <p className="card trainCard newTrain clickableThing">+ New Train</p>    
                            </a>
                        </Link>
						
						<details className="card trainCard clickableThing aboutDropDown">
						<summary>
							About Amtraker
						</summary>
							<AboutSection/>
						</details>
                    </details>
                </section>
            </main>

            <script async src="../scripts/menu.js"></script>
            
            <MapWithNoSSR trainData={trainData}/>
            <span className="showAllTrains">
                Show All Trains
                <input type="checkbox" id="showAllTrains" name="showAllTrains" value="showAll" onClick={handleShowAll}/>
            </span>
        </div>
    )
})

export default Home;

/*
                        <Link href="../about">
                            <a className="trainBoxLink">
                                <p className="card trainCard newTrain clickableThing">About Amtraker</p>    
                            </a>
                        </Link>
						*/