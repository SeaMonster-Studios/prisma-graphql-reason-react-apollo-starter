// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Component1$ReactHooksTemplate = require("./Component1.bs.js");
var Component2$ReactHooksTemplate = require("./Component2.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(Component1$ReactHooksTemplate.make, {
          message: "Hello! Click this text."
        }), "index1");

ReactDOMRe.renderToElementWithId(React.createElement(Component2$ReactHooksTemplate.make, {
          greeting: "Hello!"
        }), "index2");

/*  Not a pure module */
