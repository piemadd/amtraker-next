const ManualTrainBox = ({ trainObj, clickable }) => {    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const schDep = new Date(trainObj.origSchDep);

    let clickableClass = "";
    
    if (clickable != false) {
        clickableClass = " clickableThing"
    }
    
    return (
        <article className={"card trainCard" + clickableClass}>
            <div className="meta">
                <div className="title">
                    <h3>{trainObj.routeName}</h3>
                    <div className={"status " + trainObj.trainTimely.toLowerCase()}>{trainObj.trainTimely}</div>
                </div>
                <p className="route">{months[schDep.getMonth()]} {schDep.getDate()}, {schDep.getFullYear()} - {trainObj.origCode} --&gt; {trainObj.destCode}</p>
                <p className="route"><span className="tag">Speed: </span>{trainObj.velocity.toFixed(2)} mph</p>
                <p className="location"><span className="tag">Next Stop:</span> {trainObj.eventName} ({trainObj.eventCode})</p>
                </div>
        </article>
    );
};

export default ManualTrainBox;