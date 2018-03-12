import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter
} from "react-router-dom";

import LoginNew from "./Components/LoginNew.js";
import Dashboard from "./Components/Dashboard.js";
import PatientReg from "./Components/PatientReg.js";
import Billing from "./components/Billing.js";


const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <LoginNew />
	},
	{
		path: "/PatientReg",
		isExactPath: true,
		component: <PatientReg />
	},
	{
		path: "/Dashboard",
		isExactPath: true,
		component: <Dashboard />
	},
	{
		path: "/Billing",
		isExactPath: true,
		component: <Billing />
	}
];

const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;