import React from "react";
import ReactDOM from "react-dom";
import { route } from "./routes";
import { BrowserRouter, useLocation } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MainMenu from "./Menu";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./MainStyle.css";

//import "./index.css";
//import { Home } from "./views/Home/Home.js";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

function TopBar() {
	const location = useLocation();
	const branch = matchRoutes(route, location.pathname);
	const curBranch = branch[branch.length - 1].route;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<MainMenu />
					<Box>
						<Typography variant="h6" color="inherit">
							{curBranch.title}
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<CssBaseline />
		<TopBar />
		{/* kick it all off with the root route */}
		{renderRoutes(route)}
	</BrowserRouter>,
	document.getElementById("SiteBody")
);
