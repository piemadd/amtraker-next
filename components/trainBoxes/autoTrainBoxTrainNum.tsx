import ManualTrainBox from '../trainBoxes/manualTrainBox';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AutoTrainBoxTrainNum = ({ trainNum, trainDate, clickable }) => {
    const { data, error } = useSWR(`https://api.amtraker.com/v1/trains/${trainNum}`, fetcher)

    if (error) return <div className="card">Failed to load</div>
    if (!data) return <div className="card">Loading...</div>

    let trainObj = {};
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].sch_dep_obj.getDate() == trainDate.getDate()) {
            trainObj = dada[i];
        }
    }
    
    return (
        <>
            <ManualTrainBox trainObj={trainObj} clickable={clickable}/>
        </>
    )
};

export default AutoTrainBoxTrainNum;