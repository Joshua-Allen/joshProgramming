import React from "react";
import "./style.css";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
//import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

function ListItemCheck(props) {
	let val = props.value;
	const labelId = `checkbox-list-label-${val}`;
	return (
		<ListItem key={val} role={undefined} dense button onClick={props.onClick(val)}>
			<ListItemIcon>
				<Checkbox
					edge="start"
					checked={props.checked.indexOf(val) !== -1}
					tabIndex={-1}
					disableRipple
					inputProps={{ "aria-labelledby": labelId }}
				/>
			</ListItemIcon>
			<ListItemText id={labelId} primary={props.children} />
		</ListItem>
	);
}

function LessonSetup() {
	const classes = useStyles();
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	let checkIndex = 0;
	//const value = "Lesson Setup";
	return (
		<div>
			<Typography align="center" variant="h5" paragraph={true}>
				Setting up your development environment
			</Typography>
			<hr />

			<Typography align="left" variant="h6" paragraph={true}>
				Download{" "}
				<a href="https://code.visualstudio.com/download" target="blank">
					Visual Studio Code
				</a>
			</Typography>

			<List className={classes.root}>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Install it
				</ListItemCheck>
			</List>

			<Typography align="left" variant="h6" paragraph={true}>
				Download the extensions:
			</Typography>

			<List className={classes.root}>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Live Server
				</ListItemCheck>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Material Theme
				</ListItemCheck>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Visual Studio IntelliCode
				</ListItemCheck>
			</List>

			<Typography align="left" variant="h6" paragraph={true}>
				Setup a project:
			</Typography>

			<List className={classes.root}>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Create a folder in your documnets named "Projects"
				</ListItemCheck>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Create a new folder in the Projects folder named "Playground"
				</ListItemCheck>
				<ListItemCheck value={++checkIndex} checked={checked} onClick={handleToggle}>
					Open the Playground folder in Visual Studio Code
				</ListItemCheck>
			</List>
		</div>
	);
}
/*
				<ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
					<ListItemIcon>
						<Checkbox
							edge="start"
							checked={checked.indexOf(value) !== -1}
							tabIndex={-1}
							disableRipple
							inputProps={{ "aria-labelledby": 0 }}
						/>
					</ListItemIcon>
					<ListItemText id={0} primary={`Line item ${value + 1}`} />
				</ListItem>
*/
export default LessonSetup;
