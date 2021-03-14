import React from "react";
import { route } from "../../routes";
import { renderRoutes } from "react-router-config";
import "./style.css";

export const Home = () => (
	<div className="Home">
		<div>Nothing really here...</div>
		{renderRoutes(route.routes)}
	</div>
);
