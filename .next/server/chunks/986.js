"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 9986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ManualTrainBox = ({ trainObj , clickable  })=>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const schDep = new Date(trainObj.origSchDep);
    let clickableClass = "";
    //console.log('clickable: ' + clickable)
    //console.log(clickable != 'false')
    if (clickable != 'false') {
        clickableClass = " clickableThing";
    }
    //dont ask
    let velocity = trainObj.velocity ? trainObj.velocity : 0;
    //thanks norfolk southern
    let trainTimely = trainObj.trainTimely ? trainObj.trainTimely : "No Data";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "card trainCard" + clickableClass,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "meta",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: trainObj.routeName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "status " + trainTimely.toLowerCase().split(' ').join('-'),
                                children: trainTimely
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "route",
                        children: [
                            months[schDep.getMonth()],
                            " ",
                            schDep.getDate(),
                            ", ",
                            schDep.getFullYear(),
                            " - ",
                            trainObj.origCode,
                            " --> ",
                            trainObj.destCode
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "route",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "tag",
                                children: "Speed: "
                            }),
                            velocity.toFixed(2),
                            " mph"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "location",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "tag",
                                children: "Next Stop:"
                            }),
                            " ",
                            trainObj.eventName,
                            " (",
                            trainObj.eventCode,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "number number-small",
                children: trainObj.trainNum
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManualTrainBox);


/***/ })

};
;