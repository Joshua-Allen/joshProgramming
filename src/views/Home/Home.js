import React from "react";
import { route } from "../../routes";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import "./style.css";

const value = "World";
export const Home = () => (
	<div>
		<div>Hello {value}</div>
		<Link to="/Lessons">test</Link>
		{renderRoutes(route.routes)}
	</div>
);
