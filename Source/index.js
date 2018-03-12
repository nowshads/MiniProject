import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import routes from "./routes.js";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reducers from "./Reducers/index.js";

const Middleware = applyMiddleware(logger);
const store=createStore(reducers, Middleware);

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>  , document.getElementById('container'));