"use strict";
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ autoTrainBoxTrainNum)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/trainBoxes/manualTrainBox.jsx
var manualTrainBox = __webpack_require__(9986);
;// CONCATENATED MODULE: ./components/trainBoxes/errorTrainBox.jsx

const ErrorTrainBox = ({ error , errorDetails ="Whoever was in charge of making this error didn't provide any details so we're just going to be in the dark abou this one..."  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "card trainCard",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "meta",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: error
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "route",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "tag",
                        children: errorDetails
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const errorTrainBox = (ErrorTrainBox);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/trainBoxes/autoTrainBoxTrainNum.jsx





const AutoTrainBoxTrainNum = ({ trainNum , trainDate , clickable  })=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(false);
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
    if (data == null || data == undefined) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(errorTrainBox, {
                error: "Train not found!",
                errorDetails: "Whatever train should have existed doesn't (at least from what I can tell), and if you're seeing this, that means something has terribly wrong within my code."
            })
        }));
    } else if (clickable == 'false') {
        return(/*#__PURE__*/ jsx_runtime_.jsx(manualTrainBox/* default */.Z, {
            trainObj: data,
            clickable: clickable
        }));
    } else {
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `../trains/${trainNum}?d=${trainDate}`,
            className: "trainBoxLink",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "trainBoxLink",
                children: /*#__PURE__*/ jsx_runtime_.jsx(manualTrainBox/* default */.Z, {
                    trainObj: data,
                    clickable: clickable
                })
            })
        }));
    }
};
/* harmony default export */ const autoTrainBoxTrainNum = (AutoTrainBoxTrainNum);


/***/ })

};
;