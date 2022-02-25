import ManualTrainBox from '../trainBoxes/manualTrainBox';
import ErrorTrainBox from '../trainBoxes/errorTrainBox';
import { useEffect, useState } from "react";

const AutoTrainBoxTrainNum = ({ trainNum, trainDate, clickable }) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

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

    if (data == null || data == undefined) {
        return (
            <>
                <ErrorTrainBox error={"Train not found!"} errorDetails={"Whatever train should have existed doesn't (at least from what I can tell), and if you're seeing this, that means something has terribly wrong within my code."}/>
            </>
        )
    } else {
        return (
            <>
                <ManualTrainBox trainObj={data} clickable={clickable}/>
            </>
        )    
    }
};

export default AutoTrainBoxTrainNum;