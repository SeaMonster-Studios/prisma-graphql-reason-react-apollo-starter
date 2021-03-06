// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Query$ReasonApolloHooks = require("reason-apollo-hooks/lib/js/src/Query.bs.js");

var ppx_printed_query = "query PostsQuery  {\nposts  {\nid  \ntitle  \ncontent  \npublished  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "posts");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeArray(value$1);
      tmp = match$2 !== undefined ? match$2.map((function (value) {
                var match = Js_json.decodeObject(value);
                if (match !== undefined) {
                  var value$1 = Caml_option.valFromOption(match);
                  var match$1 = Js_dict.get(value$1, "id");
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$2 = Caml_option.valFromOption(match$1);
                    var match$2 = Js_json.decodeString(value$2);
                    tmp = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type Post is missing");
                  }
                  var match$3 = Js_dict.get(value$1, "title");
                  var tmp$1;
                  if (match$3 !== undefined) {
                    var value$3 = Caml_option.valFromOption(match$3);
                    var match$4 = Js_json.decodeString(value$3);
                    tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field title on type Post is missing");
                  }
                  var match$5 = Js_dict.get(value$1, "content");
                  var tmp$2;
                  if (match$5 !== undefined) {
                    var value$4 = Caml_option.valFromOption(match$5);
                    var match$6 = Js_json.decodeString(value$4);
                    tmp$2 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                  } else {
                    tmp$2 = Js_exn.raiseError("graphql_ppx: Field content on type Post is missing");
                  }
                  var match$7 = Js_dict.get(value$1, "published");
                  var tmp$3;
                  if (match$7 !== undefined) {
                    var value$5 = Caml_option.valFromOption(match$7);
                    var match$8 = Js_json.decodeBoolean(value$5);
                    tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$5));
                  } else {
                    tmp$3 = Js_exn.raiseError("graphql_ppx: Field published on type Post is missing");
                  }
                  return {
                          id: tmp,
                          title: tmp$1,
                          content: tmp$2,
                          published: tmp$3
                        };
                } else {
                  return Js_exn.raiseError("graphql_ppx: Object is not a value");
                }
              })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field posts on type Query is missing");
    }
    return {
            posts: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var PostsQueryConfig = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var PostsQuery = Query$ReasonApolloHooks.Make([
      ppx_printed_query,
      parse
    ]);

function PostsQuery$1(Props) {
  var match = Curry._4(PostsQuery[/* use */0], undefined, undefined, undefined, /* () */0);
  var simple = match[0];
  var tmp;
  if (typeof simple === "number") {
    if (simple === 0) {
      tmp = React.createElement("p", undefined, "Loading...");
    } else {
      console.log("no data");
      tmp = React.createElement("p", undefined, "no data in query request");
    }
  } else {
    console.log(simple[0]);
    tmp = simple.tag ? React.createElement("p", undefined, "error in query request") : React.createElement("p", undefined, "data found in query request, logged to the console.");
  }
  return React.createElement("div", undefined, tmp);
}

var make$1 = PostsQuery$1;

exports.PostsQueryConfig = PostsQueryConfig;
exports.PostsQuery = PostsQuery;
exports.make = make$1;
/* PostsQuery Not a pure module */
