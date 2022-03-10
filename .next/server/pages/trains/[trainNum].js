(() => {
var exports = {};
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 2630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Train),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./public/data/trainNums.js
var trainNums = __webpack_require__(1531);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/tagsTrain.jsx


const TagsBlockTrain = ({ trainNum , trainName  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://www.googletagmanager.com/gtag/js?id=G-L3ZMMQZR55"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('require', 'dnt')
                        gtag('config', 'G-L3ZMMQZR55', { page_path: window.location.pathname });
                    `
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://storage.googleapis.com/outfox/dnt_min.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                children: [
                    "Amtraker | Amtrak Train ",
                    trainName,
                    " (",
                    trainNum,
                    ") Tracker"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: "https://amtraker.com/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: "Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: "Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: "https://amtraker.com/images/opengraph.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:domain",
                content: "amtraker.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: "https://amtraker.com/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: "Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: "Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: "https://amtraker.com/images/opengraph.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "images/icons/icon-72.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "images/icons/icon-512.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "apple-mobile-web-app-status-bar",
                content: "#212529"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#212529"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: "Amtrak Train " + trainName + " Tracker (Amtrak Train " + trainNum + " Tracker) | Amtraker"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Never worry about tracking your Amtrak train again, even in the middle of nowhere. This simple website and PWA makes it easier than ever to track trains while using minimal amounts of data."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: trainName + "Train Tracking, " + trainName + " Tracking, Amtrak " + trainName + " Train Tracking, Amtrak " + trainName + " Tracking, Amtrak " + trainName + ", Amtrak, Amtrak Train Amtrak Train Status, Amtrak Train Tracker, Amtrak Tracker, Amtrak Train Status Today, Amtrak Status, Amtrak Train Tracking, Amtrak Tracking, Train Tracking"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "Content-Type",
                content: "text/html; charset=utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "language",
                content: "English"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "revisit-after",
                content: "30 minutes"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "Piero LLC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "sitemap",
                type: "application/xml",
                title: "Sitemap",
                href: "/sitemap.xml"
            })
        ]
    }));
};
/* harmony default export */ const tagsTrain = (TagsBlockTrain);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/trainLinks.jsx



const TrainLinks = ({ trainNum , trainName  })=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)([]);
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        fetch(`https://api.amtraker.com/v1/trains/${trainNum}`).then(async (res)=>{
            try {
                let trainData = await res.json();
                let dates = trainData.map((train)=>{
                    return train.origSchDep.toString();
                });
                setData(dates);
                setLoading(false);
            } catch  {
                setData("noActive");
            }
        });
    }, []);
    //let dates = JSON.parse(JSON.stringify(data));
    let dates1 = data;
    if (dates1 == "noActive" || dates1.length == 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "trainSelector",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "There are currently no active ",
                    trainName,
                    " trains."
                ]
            })
        }));
    } else {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "trainSelector",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Which day's train would you like to track?"
                }),
                data.map((trainDate)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: {
                                pathname: `/trains/${trainNum}/${new Date(trainDate).getDate()}`
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: new Date(trainDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })
                            })
                        }, trainDate)
                    }, `${trainNum}-${new Date(trainDate).getDate()}`));
                })
            ]
        }));
    }
};
/* harmony default export */ const trainLinks = (TrainLinks);

// EXTERNAL MODULE: ./components/trainBoxes/autoTrainBoxTrainNum.jsx + 1 modules
var autoTrainBoxTrainNum = __webpack_require__(4655);
;// CONCATENATED MODULE: ./components/stationBoxes/stationBox.jsx

const StationBox = ({ stationObj: stationObj1 , dateSetting: dateSetting1 = 'both'  })=>{
    const timelyClasses = {
        'Late': 'late',
        'Early': 'early',
        'On Time': 'on-time',
        'Completed': 'completed',
        'No Data': 'completed'
    };
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
        'America/Los_Angeles': 'America/Los_Angeles'
    };
    let schDateOrig = stationObj1.schDep || stationObj1.schArr;
    let schDate = new Date(schDateOrig).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    //time is a Date object
    //train tz is in the long format (such as America/Chicago)
    //date setting is how the resulting date should be displayed: local, train, or both
    const makeTime = (time, stationTZ, dateSetting)=>{
        let localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let optionsLocal = {
            timeZone: longTimeZones[localTZ],
            timeZoneName: 'short',
            hour: '2-digit',
            minute: '2-digit'
        };
        let optionsTrain = {
            timeZone: longTimeZones[stationTZ],
            timeZoneName: 'short',
            hour: '2-digit',
            minute: '2-digit'
        };
        let timeLocal = new Date(time).toLocaleTimeString('en-US', optionsLocal);
        let timeTrain = new Date(time).toLocaleTimeString('en-US', optionsTrain);
        switch(dateSetting){
            case 'local':
                return timeLocal;
                break;
            case 'train':
                return timeTrain;
                break;
            default:
                return `${timeLocal} (${timeTrain})`;
                break;
        }
    };
    const genArrDep = (stationObj, dateSetting)=>{
        // get whichever one exists fro arrival and departure
        let arr = stationObj.estArr ? stationObj.estArr : stationObj.postArr;
        let dep = stationObj.estDep ? stationObj.estDep : stationObj.postDep;
        let arrText = arr ? `<span class="tag">Arrival: </span>${makeTime(arr, stationObj.tz, dateSetting)}` : '';
        let depText = dep ? `<span class="tag">Departure: </span>${makeTime(dep, stationObj.tz, dateSetting)}` : '';
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: `
                        <p class="location">${arrText}</p>
                        <p class="location">${depText}</p>
                    `
            }
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: "card",
        id: stationObj1.code,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "meta",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: `${stationObj1.stationName} (${stationObj1.code})`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "status " + timelyClasses[stationObj1.stationTimely],
                            children: stationObj1.stationTimely
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "route",
                    children: schDate
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "route",
                    children: "Arrival/Departure:"
                }),
                genArrDep(stationObj1, dateSetting1)
            ]
        })
    }));
};
/* harmony default export */ const stationBox = (StationBox);

;// CONCATENATED MODULE: ./components/stationBoxes/trainNum.jsx



const StationListTrainNum = ({ trainNum , trainDate  })=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)(null);
    const { 0: dateSetting , 1: setDateSetting  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: count , 1: setCount  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setDateSetting(localStorage.getItem('dateSetting') ? localStorage.getItem('dateSetting') : 'both');
    });
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        fetch(`https://api.amtraker.com/v1/trains/${trainNum}`).then((res)=>res.json()
        ).then((trainData)=>{
            var trainObj = {};
            for(var i = 0; i < trainData.length; i++){
                if (trainData[i].origSchDep == trainDate || new Date(trainData[i].origSchDep).getDate() == trainDate) {
                    trainObj = trainData[i];
                }
            }
            setData(trainObj);
            setLoading(false);
        });
    }, []);
    if (!data) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "There was an error fetching the station data for this train. Please try again later or email me: piero (at) piemadd (dot) com."
        }));
    } else {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: data.stations.map((station)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(stationBox, {
                    stationObj: station,
                    dateSetting: dateSetting
                }, station.code));
            })
        }));
    }
};
/* harmony default export */ const trainNum = (StationListTrainNum);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/trains/[trainNum].jsx








async function getStaticPaths() {
    const paths = Object.keys(trainNums/* data */.a).map((number)=>({
            params: {
                trainNum: number
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
// params will contain the id for each generated page.
async function getStaticProps({ params  }) {
    return {
        props: {
            trainNum: params.trainNum,
            trainName: trainNums/* data */.a[params.trainNum]
        }
    };
}
function Train(params) {
    const router = (0,router_.useRouter)();
    const { 0: dataDates , 1: setDataDates  } = (0,external_react_.useState)([]);
    const { 0: backState , 1: setBackState  } = (0,external_react_.useState)(false);
    const { 0: startDate , 1: setStartDate  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setBackState(window.history.state.idx == 0);
    }, []);
    const ohShitGoBack = ()=>{
        if (backState) {
            router.replace('/');
        } else {
            router.back();
        }
    };
    (0,external_react_.useEffect)(()=>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const localParamsTemp = Object.fromEntries(urlSearchParams.entries());
        setStartDate(localParamsTemp.d);
        setLoading(true);
        fetch('https://api.amtraker.com/v1/trains/dates').then((res)=>res.json()
        ).then((dates)=>{
            const justDates = [];
            if (dates[params.trainNum] && dates[params.trainNum].length > 0) {
                for(let i = 0; i < dates[params.trainNum].length; i++){
                    const tempDate = new Date(dates[params.trainNum][i]);
                    justDates.push(tempDate.getDate());
                }
            }
            setDataDates(justDates);
            //setDataDates(dates[params.trainNum]);
            setLoading(false);
        });
        console.log('checking for date idk');
        if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {
            let savedTrainsList = localStorage.getItem('savedTrains') ? localStorage.getItem('savedTrains') : '{}';
            savedTrainsList = JSON.parse(savedTrainsList);
            console.log('date exists so i should save new stuff idk!');
            console.log(savedTrainsList);
            console.log(params.trainNum);
            console.log(startDate);
            savedTrainsList[`${params.trainNum}-${startDate}`] = savedTrainsList[`${params.trainNum}-${startDate}`] ? savedTrainsList[`${params.trainNum}-${startDate}`] : [];
            localStorage.setItem('savedTrains', JSON.stringify(savedTrainsList));
        }
    }, []);
    if (params.trainNum && (dataDates.includes(parseInt(startDate)) || dataDates.includes(new Date(startDate).getDate()))) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(tagsTrain, {
                    trainNum: params.trainNum,
                    trainName: params.trainName
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "clickable",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>ohShitGoBack()
                                    ,
                                    children: "Back"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "View Train"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                onClick: ()=>router.push(`/?delete=true&n=${params.trainNum}&d=${startDate}`)
                                ,
                                className: "clickable",
                                children: "Delete Train"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "trainsHolder",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(autoTrainBoxTrainNum/* default */.Z, {
                        trainNum: params.trainNum,
                        trainDate: startDate,
                        clickable: 'false'
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Stations"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    id: "stationsHolder",
                    className: "stationsHolder",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(trainNum, {
                        trainNum: params.trainNum,
                        trainDate: startDate
                    })
                })
            ]
        }));
    } else {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(tagsTrain, {
                    trainNum: params.trainNum,
                    trainName: params.trainName
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(trainLinks, {
                    trainNum: params.trainNum,
                    trainName: params.trainName
                })
            ]
        }));
    }
};


/***/ }),

/***/ 1531:
/***/ ((__unused_webpack_module, exports) => {

exports.a = {
    "1": "Sunset Limited",
    "2": "Sunset Limited",
    "3": "Southwest Chief",
    "4": "Southwest Chief",
    "5": "California Zephyr",
    "6": "California Zephyr",
    "7": "Empire Builder",
    "8": "Empire Builder",
    "11": "Coast Starlight",
    "14": "Coast Starlight",
    "19": "Crescent",
    "20": "Crescent",
    "21": "Texas Eagle",
    "22": "Texas Eagle",
    "27": "Empire Builder",
    "28": "Empire Builder",
    "29": "Capitol Limited",
    "30": "Capitol Limited",
    "42": "Pennsylvanian",
    "43": "Pennsylvanian",
    "48": "Lake Shore Limited",
    "49": "Lake Shore Limited",
    "50": "Cardinal",
    "51": "Cardinal",
    "52": "Auto Train",
    "53": "Auto Train",
    "54": "Vermonter",
    "55": "Vermonter",
    "56": "Vermonter",
    "57": "Vermonter",
    "58": "City of New Orleans",
    "59": "City of New Orleans",
    "63": "Empire Service",
    "64": "Empire Service",
    "73": "Carolinian / Piedmont",
    "74": "Carolinian / Piedmont",
    "75": "Carolinian / Piedmont",
    "76": "Carolinian / Piedmont",
    "77": "Carolinian / Piedmont",
    "78": "Carolinian / Piedmont",
    "79": "Carolinian / Piedmont",
    "80": "Carolinian / Piedmont",
    "82": "Northeast Regional",
    "84": "Northeast Regional",
    "85": "Northeast Regional",
    "86": "Northeast Regional",
    "87": "Northeast Regional",
    "88": "Northeast Regional",
    "89": "Northeast Regional",
    "90": "Silver Service / Palmetto",
    "91": "Silver Service / Palmetto",
    "92": "Silver Service / Palmetto",
    "93": "Northeast Regional",
    "94": "Northeast Regional",
    "95": "Northeast Regional",
    "96": "Northeast Regional",
    "99": "Northeast Regional",
    "123": "Northeast Regional",
    "125": "Northeast Regional",
    "126": "Northeast Regional",
    "130": "Northeast Regional",
    "132": "Northeast Regional",
    "134": "Northeast Regional",
    "135": "Northeast Regional",
    "136": "Northeast Regional",
    "137": "Northeast Regional",
    "138": "Northeast Regional",
    "139": "Northeast Regional",
    "140": "Northeast Regional",
    "141": "Northeast Regional",
    "143": "Northeast Regional",
    "145": "Northeast Regional",
    "146": "Northeast Regional",
    "147": "Northeast Regional",
    "148": "Northeast Regional",
    "149": "Northeast Regional",
    "150": "Northeast Regional",
    "152": "Northeast Regional",
    "153": "Northeast Regional",
    "154": "Northeast Regional",
    "155": "Northeast Regional",
    "156": "Northeast Regional",
    "157": "Northeast Regional",
    "158": "Northeast Regional",
    "159": "Northeast Regional",
    "160": "Northeast Regional",
    "161": "Northeast Regional",
    "162": "Northeast Regional",
    "163": "Northeast Regional",
    "164": "Northeast Regional",
    "165": "Northeast Regional",
    "166": "Northeast Regional",
    "167": "Northeast Regional",
    "168": "Northeast Regional",
    "169": "Northeast Regional",
    "171": "Northeast Regional",
    "172": "Northeast Regional",
    "173": "Northeast Regional",
    "174": "Northeast Regional",
    "175": "Northeast Regional",
    "176": "Northeast Regional",
    "177": "Northeast Regional",
    "178": "Northeast Regional",
    "179": "Northeast Regional",
    "183": "Northeast Regional",
    "184": "Northeast Regional",
    "185": "Northeast Regional",
    "189": "Northeast Regional",
    "190": "Northeast Regional",
    "192": "Northeast Regional",
    "193": "Vermonter",
    "194": "Northeast Regional",
    "195": "Northeast Regional",
    "196": "Northeast Regional",
    "232": "Empire Service",
    "233": "Empire Service",
    "236": "Empire Service",
    "237": "Empire Service",
    "238": "Empire Service",
    "239": "Empire Service",
    "241": "Empire Service",
    "243": "Empire Service",
    "244": "Empire Service",
    "250": "Empire Service",
    "253": "Empire Service",
    "256": "Empire Service",
    "259": "Empire Service",
    "260": "Empire Service",
    "261": "Empire Service",
    "280": "Empire Service",
    "281": "Empire Service",
    "283": "Empire Service",
    "284": "Empire Service",
    "290": "Ethan Allen Express",
    "291": "Ethan Allen Express",
    "300": "Michigan Services",
    "301": "Illinois Service",
    "302": "Illinois Service",
    "303": "Illinois Service",
    "304": "Illinois Service",
    "305": "Illinois Service",
    "306": "Michigan Services",
    "307": "Illinois Service",
    "313": "Missouri River Runner",
    "314": "Missouri River Runner",
    "330": "Hiawatha",
    "331": "Hiawatha",
    "332": "Hiawatha",
    "333": "Hiawatha",
    "334": "Hiawatha",
    "335": "Hiawatha",
    "336": "Hiawatha",
    "337": "Hiawatha",
    "338": "Hiawatha",
    "339": "Hiawatha",
    "340": "Hiawatha",
    "341": "Hiawatha",
    "342": "Hiawatha",
    "343": "Hiawatha",
    "350": "Michigan Services",
    "351": "Michigan Services",
    "352": "Michigan Services",
    "353": "Michigan Services",
    "354": "Michigan Services",
    "355": "Michigan Services",
    "364": "Michigan Services",
    "365": "Michigan Services",
    "370": "Michigan Services",
    "371": "Michigan Services",
    "380": "Illinois Service",
    "381": "Illinois Service",
    "382": "Illinois Service",
    "383": "Illinois Service",
    "390": "Illinois Service",
    "393": "Illinois Service",
    "400": "Northeast Regional",
    "405": "Northeast Regional",
    "409": "Northeast Regional",
    "416": "Northeast Regional",
    "417": "Northeast Regional",
    "432": "Northeast Regional",
    "448": "Lake Shore Limited",
    "449": "Lake Shore Limited",
    "450": "Northeast Regional",
    "460": "Northeast Regional",
    "461": "Northeast Regional",
    "463": "Northeast Regional",
    "464": "Northeast Regional",
    "465": "Northeast Regional",
    "467": "Northeast Regional",
    "470": "Northeast Regional",
    "471": "Northeast Regional",
    "473": "Northeast Regional",
    "474": "Northeast Regional",
    "475": "Northeast Regional",
    "476": "Northeast Regional",
    "478": "Northeast Regional",
    "479": "Northeast Regional",
    "488": "Northeast Regional",
    "490": "Northeast Regional",
    "494": "Northeast Regional",
    "495": "Northeast Regional",
    "497": "Northeast Regional",
    "499": "Northeast Regional",
    "500": "Amtrak Cascades",
    "503": "Amtrak Cascades",
    "504": "Amtrak Cascades",
    "505": "Amtrak Cascades",
    "507": "Amtrak Cascades",
    "508": "Amtrak Cascades",
    "521": "Capitol Corridor",
    "522": "Capitol Corridor",
    "523": "Capitol Corridor",
    "524": "Capitol Corridor",
    "525": "Capitol Corridor",
    "527": "Capitol Corridor",
    "528": "Capitol Corridor",
    "531": "Capitol Corridor",
    "532": "Capitol Corridor",
    "534": "Capitol Corridor",
    "536": "Capitol Corridor",
    "538": "Capitol Corridor",
    "540": "Capitol Corridor",
    "541": "Capitol Corridor",
    "542": "Capitol Corridor",
    "543": "Capitol Corridor",
    "544": "Capitol Corridor",
    "545": "Capitol Corridor",
    "546": "Capitol Corridor",
    "547": "Capitol Corridor",
    "548": "Capitol Corridor",
    "549": "Capitol Corridor",
    "551": "Capitol Corridor",
    "562": "Pacific Surfliner",
    "564": "Pacific Surfliner",
    "567": "Pacific Surfliner",
    "572": "Pacific Surfliner",
    "573": "Pacific Surfliner",
    "580": "Pacific Surfliner",
    "581": "Pacific Surfliner",
    "583": "Pacific Surfliner",
    "586": "Pacific Surfliner",
    "588": "Pacific Surfliner",
    "591": "Pacific Surfliner",
    "594": "Pacific Surfliner",
    "595": "Pacific Surfliner",
    "600": "Keystone",
    "601": "Keystone",
    "605": "Keystone",
    "610": "Keystone",
    "611": "Keystone",
    "612": "Keystone",
    "615": "Keystone",
    "619": "Keystone",
    "620": "Keystone",
    "622": "Keystone",
    "637": "Keystone",
    "639": "Keystone",
    "640": "Keystone",
    "642": "Keystone",
    "643": "Keystone",
    "645": "Keystone",
    "646": "Keystone",
    "647": "Keystone",
    "650": "Keystone",
    "651": "Keystone",
    "652": "Keystone",
    "653": "Keystone",
    "654": "Keystone",
    "655": "Keystone",
    "660": "Keystone",
    "661": "Keystone",
    "662": "Keystone",
    "663": "Keystone",
    "664": "Keystone",
    "665": "Keystone",
    "666": "Keystone",
    "667": "Keystone",
    "669": "Keystone",
    "670": "Keystone",
    "671": "Keystone",
    "672": "Keystone",
    "680": "Downeaster",
    "681": "Downeaster",
    "682": "Downeaster",
    "683": "Downeaster",
    "684": "Downeaster",
    "685": "Downeaster",
    "686": "Downeaster",
    "687": "Downeaster",
    "688": "Downeaster",
    "689": "Downeaster",
    "690": "Downeaster",
    "691": "Downeaster",
    "692": "Downeaster",
    "693": "Downeaster",
    "694": "Downeaster",
    "695": "Downeaster",
    "696": "Downeaster",
    "697": "Downeaster",
    "698": "Downeaster",
    "699": "Downeaster",
    "702": "San Joaquins",
    "703": "San Joaquins",
    "710": "San Joaquins",
    "711": "San Joaquins",
    "712": "San Joaquins",
    "713": "San Joaquins",
    "714": "San Joaquins",
    "715": "San Joaquins",
    "716": "San Joaquins",
    "717": "San Joaquins",
    "718": "San Joaquins",
    "719": "San Joaquins",
    "720": "Capitol Corridor",
    "723": "Capitol Corridor",
    "724": "Capitol Corridor",
    "727": "Capitol Corridor",
    "728": "Capitol Corridor",
    "729": "Capitol Corridor",
    "732": "Capitol Corridor",
    "736": "Capitol Corridor",
    "737": "Capitol Corridor",
    "741": "Capitol Corridor",
    "742": "Capitol Corridor",
    "743": "Capitol Corridor",
    "744": "Capitol Corridor",
    "745": "Capitol Corridor",
    "746": "Capitol Corridor",
    "747": "Capitol Corridor",
    "748": "Capitol Corridor",
    "751": "Capitol Corridor",
    "761": "Pacific Surfliner",
    "765": "Pacific Surfliner",
    "770": "Pacific Surfliner",
    "774": "Pacific Surfliner",
    "777": "Pacific Surfliner",
    "784": "Pacific Surfliner",
    "785": "Pacific Surfliner",
    "794": "Pacific Surfliner",
    "821": "Heartland Flyer",
    "822": "Heartland Flyer",
    "1105": "Winter Park Express",
    "1106": "Winter Park Express",
    "1689": "Downeaster",
    "2003": "Piero Limited",
    "2103": "Acela",
    "2122": "Acela",
    "2126": "Acela",
    "2150": "Acela",
    "2151": "Acela",
    "2154": "Acela",
    "2155": "Acela",
    "2158": "Acela",
    "2159": "Acela",
    "2163": "Acela",
    "2164": "Acela",
    "2165": "Acela",
    "2168": "Acela",
    "2169": "Acela",
    "2170": "Acela",
    "2172": "Acela",
    "2173": "Acela",
    "2190": "Acela",
    "2203": "Acela",
    "2205": "Acela",
    "2213": "Acela",
    "2218": "Acela",
    "2222": "Acela",
    "2224": "Acela",
    "2248": "Acela",
    "2249": "Acela",
    "2250": "Acela",
    "2251": "Acela",
    "2252": "Acela",
    "2253": "Acela",
    "2254": "Acela",
    "2255": "Acela",
    "2256": "Acela",
    "2257": "Acela",
    "2259": "Acela"
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,986,655], () => (__webpack_exec__(2630)));
module.exports = __webpack_exports__;

})();