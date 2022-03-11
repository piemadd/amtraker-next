import ManualTrainBox from '../trainBoxes/manualTrainBox';
import ErrorTrainBox from '../trainBoxes/errorTrainBox';
import { useEffect, useState } from "react";
import Link from 'next/link';

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
                    if (trainData[i].origSchDep == trainDate || new Date(trainData[i].origSchDep).getDate() == trainDate) {
                        trainObj = trainData[i];
                    }                    
                }
                
                setData(trainObj)
                setLoading(false)
            }).catch((e) => {
                setData(null)
                setLoading(false)
            })
            
    }, [])

    //<ErrorTrainBox error={"Train not found!"} errorDetails={"Whatever train should have existed doesn't (at least from what I can tell), and if you're seeing this, that means something has terribly wrong within my code."}/>

    if (data == null || data == undefined) {
        return (
            <>
                
            </>
        )
    } else if (clickable == 'false') {
        return (
            <ManualTrainBox trainObj={data} clickable={clickable}/>
        )    
    } else {
        return (
            <Link href={`../trains/${trainNum}?d=${trainDate}`} className="trainBoxLink">
                <a className="trainBoxLink">
                    <ManualTrainBox trainObj={data} clickable={clickable}/>
                </a>
            </Link>
        )    
    }
};

export default AutoTrainBoxTrainNum;