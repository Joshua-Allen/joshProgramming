import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { LessonList } from "./LessonList";

import { BrowserRouter, useLocation } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && <Box div={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(
	(theme) => ({
		root: {
			flexGrow: 1,
			justifyContent: "center",
			backgroundColor: theme.palette.grey[500], //theme.palette.background.paper,
			display: "flex",
			height: "100%",
		},
		tabs: {
			borderRight: `1px solid ${theme.palette.divider}`,
			backgroundColor: theme.palette.background.default,
			overflow: "inherit",
		},
		tabBody: {
			padding: "10px",
			maxWidth: "1000px",
			backgroundColor: theme.palette.common.white,
			flexGrow: 1,
			overflow: "auto",
		},
	}),
	{ name: "Styled" }
);

function getStartTab() {
	return 0;
}

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(getStartTab());

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}>
				{LessonList.map((Lesson, index) => {
					return <Tab key={index} label={Lesson.name} {...a11yProps(index)} />;
				})}
			</Tabs>
			{LessonList.map((Lesson, index) => {
				return (
					<TabPanel className={classes.tabBody} key={index} value={value} index={index}>
						<Lesson.component></Lesson.component>
					</TabPanel>
				);
			})}
		</div>
	);
}
