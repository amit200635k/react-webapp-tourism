import React from 'react'

// export const Loader = (props) => {
//     return (         <></>    )
// }

export const Spinner=(props)=> {
    var containerClass = "spinner-container";
  
    if (props.center === true) {
      containerClass = "spinner-container";
    } else if (props.center === false) {
      containerClass = "spinner-container-regular";
    }
  
    return /*#__PURE__*/React.createElement("div", {
      className: containerClass,
      style: {
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      viewBox: "0 0 276 276",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "spinner"
    }, /*#__PURE__*/React.createElement("circle", {
      id: "bottom",
      cx: "138",
      cy: "138",
      r: "114",
      stroke: "#DBDBDB",
      "strokeWidth": "18"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "upper",
      cx: "138",
      cy: "138",
      r: "123",
      stroke: "#72BBFF",
      "strokeWidth": "30",
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeDasharray": "373 100"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "text-loading"
    }, props.text));
  };

