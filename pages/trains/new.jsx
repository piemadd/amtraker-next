import Head from 'next/head';
import Dynamic from 'next/dynamic';
import { useState } from 'react';
import AutoTrainBoxTrainNum from '../../components/trainBoxes/autoTrainBoxTrainNum';

function NewTrain() {
    const [trainData, setTrainData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const localParamsTemp = Object.fromEntries(urlSearchParams.entries());

        setStartDate(localParamsTemp.d);
        
        setLoading(true)
        fetch('https://api.amtraker.com/v1/trains')
            .then((res) => res.json())
            .then((trainData) => {

                setTrainData(trainData);
                setLoading(false)
            })
    }, [])
    
    return (
        <>
            <Head>
                <title>
                    Amtraker | New Train
                </title>
            </Head>
            <header>
                <div>
                    <h2 className="clickable"><a onClick={() => router.back()}>Back</a></h2>
                    <h1>New Train</h1>
                    <h2></h2>
                </div>
            </header>
    
            <main className="trainsHolder">
                <AutoTrainBoxTrainNum trainNum={1} trainDate={5} clickable={true}/>
            </main>
        </>
    )
}

export default NewTrain;
