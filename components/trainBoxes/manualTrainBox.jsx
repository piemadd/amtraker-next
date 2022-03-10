const ManualTrainBox = ({ trainObj, clickable }) => {    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const schDep = new Date(trainObj.origSchDep);

    let clickableClass = "";

    //console.log('clickable: ' + clickable)
    //console.log(clickable != 'false')
    
    if (clickable != 'false') {
        clickableClass = " clickableThing"
    }

    //dont ask
    let velocity = trainObj.velocity ? trainObj.velocity : 0;

    //thanks norfolk southern
    let trainTimely = trainObj.trainTimely ? trainObj.trainTimely : "No Data";
    
    return (
        <article className={"card trainCard" + clickableClass}>
            <div className="meta">
                <div className="title">
                    <h3>{trainObj.routeName}</h3>
                    <div className={"status " + trainTimely.toLowerCase().split(' ').join('-')}>{trainTimely}</div>
                </div>
                <p className="route">{months[schDep.getMonth()]} {schDep.getDate()}, {schDep.getFullYear()} - {trainObj.origCode} --&gt; {trainObj.destCode}</p>
                <p className="route"><span className="tag">Speed: </span>{velocity.toFixed(2)} mph</p>
                <p className="location"><span className="tag">Next Stop:</span> {trainObj.eventName} ({trainObj.eventCode})</p>
            </div>
            <div className="number number-small">{trainObj.trainNum}</div>
        </article>
    );
};

export default ManualTrainBox;