import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import Link from 'next/link';

let trainIcon = L.icon({
    iconUrl: '/icons/placeholdericon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
});

const Map = (trainData) => {

    const style = 'piemadd/ckyugw7ui000y14o2nq8we94g'
    const token = 'pk.eyJ1IjoicGllbWFkZCIsImEiOiJjbDBsZjYxaGYwYngzM2p0NGtocmo0cHlhIn0.E1MTAeD7QLDKhrUtG2MTyA'

    console.log("trainData: " + trainData.trainData)
    console.log(trainData.trainData)
    
    return (
        <MapContainer
            center={[39.14710270770074, -96.1962890625]}
            zoom={5}
            //maxZoom={14}
            tileSize={512}
            style={{ height: "100vh", width: "100vw", 'zIndex': 0, overflow: 'hidden' }}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/${style}/tiles/{z}/{x}/{y}?access_token=${token}`}
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            />
            {trainData.trainData.map((entry) => {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const schDep = new Date(entry.origSchDep);

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
                    
                    let arrText = arr ? `Arrival: ${makeTime(arr, stationObj.tz, dateSetting)}` : '';
                    let depText = dep ? `Departure: ${makeTime(dep, stationObj.tz, dateSetting)}` : '';
            
                    return (
                        <div 
                            dangerouslySetInnerHTML={{
                                __html: `
                                    <p>Arrival/Departure: Device Time (Train Time)<br/>
                                    ${arrText}<br/>
                                    ${depText}</p>
                                `,
                            }}
                        />
                    )
                })

                //dont ask
                let velocity = entry.velocity ? entry.velocity : 0;
            
                //thanks norfolk southern
                let trainTimely = entry.trainTimely ? entry.trainTimely : "No Data";

                console.log(genArrDep(entry.stations.find((station) => station.code == entry.eventCode), 2))
            
                return (
                    <Marker key={`${entry.trainNum}-${schDep.getDate()}`} position={entry.coordinates} icon={trainIcon}>
                        <Popup>
                            <h3>{entry.routeName}</h3>
                            <i>{entry.stations[0].stationName} --&gt; {entry.stations[entry.stations.length - 1].stationName}</i><br/>
                            {months[schDep.getMonth()]} {schDep.getDate()}, {schDep.getFullYear()}<br/><br/>
                            {trainTimely} - {velocity.toFixed(2)} mph<br/>
                            {genArrDep(entry.stations.find((station) => station.code == entry.eventCode), 2)}
                            <i>Last Updated {new Date(entry.updatedAt).toLocaleTimeString('en-US')}</i><br/>
                            <i>Last Train Transpond {new Date(entry.lastValTS).toLocaleTimeString('en-US')}</i><br/><br/>
                            <Link href={`/trains/${entry.trainNum}?d=${schDep.getDate()}`}>
                                <a>View More</a>
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    );
};

export default Map;