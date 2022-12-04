import Link from 'next/link';
import { useEffect, useState } from "react";

const TrainLinks = (({trainNum, trainName, embed}) => {

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

    const embedState = (embed != 'false') ? '&embed=true' : ''

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
              console.log(trainDate)
                    return (
                        <p key={`${trainNum}-${new Date(trainDate).getDate()}`}>
                            <Link
                                href={{
                                    pathname: `/trains/${trainNum}/${new Date(trainDate).getDate()}`,
                                }}
                                key={trainDate}
                            >
                                <a>{new Date(trainDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</a>
                            </Link>
                        </p>
                    )
                })}
            </div>
        )   
    }
})

export default TrainLinks;