import { route } from "../../routes";
import React from "react";
import { matchRoutes, renderRoutes } from "react-router-config";

export const Root = ({ route }) => (
	<div>
		{/* child routes won't render without this */}
		{renderRoutes(route.routes)}
	</div>
);
