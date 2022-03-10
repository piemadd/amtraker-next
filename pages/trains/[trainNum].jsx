import { data } from "../../public/data/trainNums";
import TagsBlockTrain from '../../components/tagsTrain';
import TrainLinks from '../../components/trainLinks';
import AutoTrainBoxTrainNum from '../../components/trainBoxes/autoTrainBoxTrainNum';
import StationListTrainNum from '../../components/stationBoxes/trainNum'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export async function getStaticPaths() {

    const paths = Object.keys(data).map((number) => ({
        params: { trainNum: number }
    }))

    return { paths, fallback: false }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {    
    return {
        props: {
            trainNum: params.trainNum,
            trainName: data[params.trainNum]
        }
    }
}

export default function Train(params) {

    const router = useRouter();

    const [dataDates, setDataDates] = useState([]);
    const [backState, setBackState] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setBackState(window.history.state.idx == 0);
    }, [])

    const ohShitGoBack = (() => {
        if (backState) {
            router.replace('/');
        } else {
            router.back();
        }
    })

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const localParamsTemp = Object.fromEntries(urlSearchParams.entries());

        setStartDate(localParamsTemp.d);
        
        setLoading(true)
        fetch('https://api.amtraker.com/v1/trains/dates')
            .then((res) => res.json())
            .then((dates) => {
                const justDates = [];

                if (dates[params.trainNum] && dates[params.trainNum].length > 0) {
                    for (let i = 0; i < dates[params.trainNum].length; i++) {
                        const tempDate = new Date(dates[params.trainNum][i]);
                        justDates.push(tempDate.getDate());
                    }
                }

                setDataDates(justDates);
                //setDataDates(dates[params.trainNum]);
                setLoading(false)
            })

        console.log('checking for date idk')
        
        if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {
            
            let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
            savedTrainsList = JSON.parse(savedTrainsList);

            console.log('date exists so i should save new stuff idk!')
            console.log(savedTrainsList)
            console.log(params.trainNum)
            console.log(startDate)
    
            savedTrainsList[`${params.trainNum}-${startDate}`] = savedTrainsList[`${params.trainNum}-${startDate}`] ? savedTrainsList[`${params.trainNum}-${startDate}`] : [];
    
            localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
        }
        
        
    }, [])    

    if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {
        return (
            <>
                <TagsBlockTrain trainNum={params.trainNum} trainName={params.trainName}/>
        		<header>
                    <div>
            			<h2 className="clickable"><a onClick={() => ohShitGoBack()}>Back</a></h2>
            			<h1>View Train</h1>
            			<h2 onClick={() => router.push(`/?delete=true&n=${params.trainNum}&d=${startDate}`)} className="clickable">Delete Train</h2>
                    </div>
        		</header>
        
        		<main className="trainsHolder">
        			<AutoTrainBoxTrainNum trainNum={params.trainNum} trainDate={startDate} clickable={'false'}/>
        		</main>
        
        		<header>
        			<h1>Stations</h1>
        		</header>
        		
        		<main id="stationsHolder" className="stationsHolder">
            		<StationListTrainNum trainNum={params.trainNum} trainDate={startDate}/>
                </main>
            </>
        )
    } else {
        return (
            <>
                <TagsBlockTrain trainNum={params.trainNum} trainName={params.trainName}/>
                <TrainLinks trainNum={params.trainNum} trainName={params.trainName}/>
            </>
        )
    }
}
