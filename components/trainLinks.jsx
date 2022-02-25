import { useEffect, useState } from "react";

const TrainLinks = (({trainNum, trainName}) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.amtraker.com/v1/trains/${trainNum}`)
            .then(async (res) => {
                try {
                    let trainData = await res.json();
                    let dates = trainData.map((train) => {
                        return train.origSchDep.toString();
                    });

                    setData(dates);
                    setLoading(false);
                } catch {
                    setData("noActive");
                }
            })
    }, [])

    //let dates = JSON.parse(JSON.stringify(data));
    let dates = data;
    
    if (dates == "noActive" || dates.length == 0) {
        return (
            <div className="trainSelector">
                <p>There are currently no active {trainName} trains.</p>
            </div>
        )
    } else {
        return (
            <div className="trainSelector">
                <p>Which day&#39;s train would you like to track?</p>
                {data.map((trainDate) => {
                    return (<a href={`?d=${trainDate}`}>
                        {new Date(trainDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </a>)
                })}
            </div>
        )   
    }
})

/*
{
                
            }
*/

export default TrainLinks;