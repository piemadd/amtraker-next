const StationBox = ({ stationObj, nextStop='false', dateSetting='train' }) => {    
    const timelyClasses = {
    	'Late': 'late',
    	'Early': 'early',
    	'On Time': 'on-time',
    	'Completed': 'completed',
    	'No Data': 'completed',
    }

    const longTimeZones = {
		'EST': 'America/New_York',
		'EDT': 'America/New_York',
        'America/New_York': 'America/New_York',
		'CST': 'America/Chicago',
		'CDT': 'America/Chicago',
        'America/Chicago': 'America/Chicago',
		'MST': 'America/Denver',
		'MDT': 'America/Denver',
        'America/Denver': 'America/Denver',
		'PST': 'America/Los_Angeles',
		'PDT': 'America/Los_Angeles',
        'America/Los_Angeles': 'America/Los_Angeles',
	};

    const arrOrDep = (stationObj.postDep || stationObj.postArr) ? 'Actual' : 'Estimated'

    let schDateOrig = stationObj.schDep || stationObj.schArr;
    let schDate = new Date(schDateOrig).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    //time is a Date object
    //train tz is in the long format (such as America/Chicago)
    //date setting is how the resulting date should be displayed: local, train, or both
    const makeTime = ((time, stationTZ, dateSetting) => {

        let localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let optionsLocal = { timeZone: longTimeZones[localTZ], timeZoneName: 'short', hour: '2-digit', minute: '2-digit' };
        let optionsTrain = { timeZone: longTimeZones[stationTZ], timeZoneName: 'short', hour: '2-digit', minute: '2-digit' };

        let timeLocal = new Date(time).toLocaleTimeString('en-US', optionsLocal);
        let timeTrain = new Date(time).toLocaleTimeString('en-US', optionsTrain);

        switch (dateSetting) {
            case 'local':
                return timeLocal;
                break;
            case 'train':
                return timeTrain;
                break;
            default: //for both or an invalid value
                return `${timeLocal} (${timeTrain})`;
                break;                
        }
    })

    const genArrDep = ((stationObj, dateSetting) => {
        // get whichever one exists fro arrival and departure
        let arr = stationObj.estArr ? stationObj.estArr : stationObj.postArr;
        let dep = stationObj.estDep ? stationObj.estDep : stationObj.postDep;

        let estArrTimely = stationObj.estArrCmnt ? stationObj.estArrCmnt : undefined;
        let estDepTimely = stationObj.estDepCmnt ? stationObj.estDepCmnt : undefined;
        let postTimely = stationObj.postCmnt ? stationObj.postCmnt : '';

        let arrCmnt = estArrTimely ? estArrTimely : postTimely;
        let depCmnt = estDepTimely ? estDepTimely : postTimely;

        let arrCmntFixed = (arrCmnt == 'ON TIME') ? '' : arrCmnt.replace(" MI", "m").replace(' HR', 'h').replace("EARLY", "Early").replace("LATE", "Late");
        let depCmntFixed = (depCmnt == 'ON TIME') ? '' : depCmnt.replace(" MI", "m").replace(' HR', 'h').replace("EARLY", "Early").replace("LATE", "Late");

        //console.log(arrCmntFixed)
        //console.log(depCmntFixed)
        
        let arrText = arr ? `<span class="tag">Arrival: </span>${makeTime(arr, stationObj.tz, dateSetting)} ${arrCmntFixed ? `(${arrCmntFixed})` : ''}` : '';
        let depText = dep ? `<span class="tag">Departure: </span>${makeTime(dep, stationObj.tz, dateSetting)} ${depCmntFixed ? `(${depCmntFixed})` : ''}` : '';

        return (
            <div 
                dangerouslySetInnerHTML={{
                    __html: `
                        <p class="location">${arrText}</p>
                        <p class="location">${depText}</p>
                    `,
                }}
            />
        )
    })

    let isNextStop = (nextStop != false) ? ' activeStation' : '';
    
    return (
        <a className={"card" + isNextStop} id={stationObj.code}>
            <div className="meta">
                <div className="title">
                    <h3>{`${stationObj.stationName} (${stationObj.code})`}</h3>
                    <div className={"status " + timelyClasses[stationObj.stationTimely]}>{stationObj.stationTimely}</div>
                </div>
                <p className="route">{schDate}</p>
                <p className="route">{arrOrDep} Arrival/Departure:</p>
                {genArrDep(stationObj, dateSetting)}
            </div>
        </a>
    );
};

export default StationBox;