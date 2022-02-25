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
                    if (trainData[i].origSchDep == trainDate) {
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
                error lol
            </>
        )
    } else {

        let stationBoxes = data.stations.map((station) => {
            return <StationBox stationObj={station} dateSetting={dateSetting}/>
        })
        
        return (
            <>
                {stationBoxes}
            </>
        )    
    }
};

export default StationListTrainNum;