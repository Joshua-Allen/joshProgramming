import React from "react";
import { route } from "../../routes";
import { matchRoutes, renderRoutes } from "react-router-config";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

const value = "World";
export const Home = () => (
	<div className="Home">
		<div>Hello {value}</div>
		<Link to="/Lessons">test</Link>
		<Button variant="contained" color="primary">
			Hello World
		</Button>
		{renderRoutes(route.routes)}
	</div>
);
