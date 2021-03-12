import React from "react";
import ReactDOM from "react-dom";
import { route } from "./routes";
import { BrowserRouter, Switch, useParams } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

//import "./index.css";
//import { Home } from "./views/Home/Home.js";

ReactDOM.render(
	<BrowserRouter>
		{/* kick it all off with the root route */}
		{renderRoutes(route)}
	</BrowserRouter>,
	document.getElementById("root")
);
