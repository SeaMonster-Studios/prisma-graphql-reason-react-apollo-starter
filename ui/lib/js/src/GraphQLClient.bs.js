// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var ApolloLinks = require("reason-apollo/lib/js/src/ApolloLinks.bs.js");
var ReasonApollo = require("reason-apollo/lib/js/src/ReasonApollo.bs.js");
var ApolloInMemoryCache = require("reason-apollo/lib/js/src/ApolloInMemoryCache.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, /* () */0);

var httpLink = ApolloLinks.createHttpLink(process.env.GRAPHQL_ENDPOINT, undefined, undefined, undefined, undefined, undefined, /* () */0);

var instance = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, /* () */0);

exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.instance = instance;
/* inMemoryCache Not a pure module */
