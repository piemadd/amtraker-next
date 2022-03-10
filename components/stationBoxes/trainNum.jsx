import StationBox from '../stationBoxes/stationBox';
import { useEffect, useState } from "react";

const StationListTrainNum = ({ trainNum, trainDate }) => {
    const [data, setData] = useState(null);
    const [dateSetting, setDateSetting] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const [count, setCount] = useState(0);
  
    useEffect(() => {
        setDateSetting(localStorage.getItem('dateSetting') ? localStorage.getItem('dateSetting') : 'both')
    });

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.amtraker.com/v1/trains/${trainNum}`)
            .then((res) => res.json())
            .then((trainData) => {

                var trainObj = {};
                
                for (var i = 0; i < trainData.length; i++) {
                    if (trainData[i].origSchDep == trainDate || new Date(trainData[i].origSchDep).getDate() == trainDate) {
                        trainObj = trainData[i];
                    }                    
                }
                
                setData(trainObj)
                setLoading(false)
            })
            
    }, [])

    if (!data) {
        return (
            <>
                There was an error fetching the station data for this train. Please try again later or email me: piero (at) piemadd (dot) com.
            </>
        )
    } else {
        return (
            <>
                {data.stations.map((station) => {
                    return <StationBox key={station.code} stationObj={station} dateSetting={dateSetting}/>
                })}
            </>
        )    
    }
};

export default StationListTrainNum;