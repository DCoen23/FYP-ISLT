(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 314:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "MainNavigation_main__R0fxt",
	"header": "MainNavigation_header__WuiTa",
	"logo": "MainNavigation_logo__oTonQ",
	"Navigation": "MainNavigation_Navigation___7rRy",
	"Hamburger": "MainNavigation_Hamburger__xmc90"
};


/***/ }),

/***/ 669:
/***/ ((module) => {

// Exports
module.exports = {
	"mainDiv": "Popup_mainDiv__jfjio",
	"greyBackground": "Popup_greyBackground__OxsdZ",
	"thePopup": "Popup_thePopup__SXSiW",
	"control": "Popup_control__t8R7I",
	"actions": "Popup_actions__rDMQ5"
};


/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(314);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
;// CONCATENATED MODULE: ./components/layout/NavLinks.js

const NavLinks = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                onclick: ()=>props.isNav && props.closeNavMenu(),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: "All Meetups"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                onclick: ()=>props.isNav && props.closeNavMenu(),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/new-meetup",
                    children: "Add New Meetup"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                onclick: ()=>props.isNav && props.closeNavMenu(),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/isl-signs",
                    children: "Sign Language"
                })
            })
        ]
    });
};
/* harmony default export */ const layout_NavLinks = (NavLinks);

;// CONCATENATED MODULE: external "react-icons/cg"
const cg_namespaceObject = require("react-icons/cg");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/layout/Navigation.js






const Navigation = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const hamburgerIcon = /*#__PURE__*/ jsx_runtime_.jsx(cg_namespaceObject.CgMenuRound, {
        className: (MainNavigation_module_default()).Hamburger,
        size: "40px",
        color: "white",
        onClick: ()=>setOpen(!open)
    });
    const closeIcon = /*#__PURE__*/ jsx_runtime_.jsx(cg_namespaceObject.CgCloseO, {
        className: (MainNavigation_module_default()).Hamburger,
        size: "40px",
        color: "white",
        onClick: ()=>setOpen(!open)
    });
    const closeNavMenu = ()=>setOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (MainNavigation_module_default()).Navigation,
        children: [
            open ? closeIcon : hamburgerIcon,
            open && /*#__PURE__*/ jsx_runtime_.jsx(layout_NavLinks, {
                isNav: true,
                closeNavMenu: closeNavMenu
            })
        ]
    });
};
/* harmony default export */ const layout_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/layout/MainNavigation.js



function MainNavigation() {
    // setInterval(() => {testTest++; console.log(testTest)}, 1000);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (MainNavigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MainNavigation_module_default()).logo,
                children: "Pretty Cool Right"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MainNavigation_module_default()).mainDiv,
                onClick: ()=>props.toggleMenuHide()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Navigation, {})
        ]
    });
}
/* harmony default export */ const layout_MainNavigation = (MainNavigation);

// EXTERNAL MODULE: ./components/layout/Popup.module.css
var Popup_module = __webpack_require__(669);
var Popup_module_default = /*#__PURE__*/__webpack_require__.n(Popup_module);
;// CONCATENATED MODULE: ./components/layout/Popup.js



function Popup(props) {
    let { 0: hideMe , 1: setHideMe  } = (0,external_react_.useState)(false);
    if (props.hide) {
        return null;
    }
    if (hideMe) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Popup_module_default()).mainDiv,
        onClick: ()=>setHideMe(true),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Popup_module_default()).greyBackground
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Popup_module_default()).thePopup,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " X"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Sign In"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Popup_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "title",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                required: true,
                                id: "title"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Popup_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "title",
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                required: true,
                                id: "title"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Popup_module_default()).actions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: "Login"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js




function Layout(props) {
    let popupHide;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Popup, {
                hide: popupHide
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MainNavigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (MainNavigation_module_default()).main,
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(429));
module.exports = __webpack_exports__;

})();