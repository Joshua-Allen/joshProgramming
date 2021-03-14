import React from "react";
import { renderRoutes } from "react-router-config";

export const Root = ({ route }) => (
	<div id="root">
		{/* child routes won't render without this */}
		{renderRoutes(route.routes)}
	</div>
);
