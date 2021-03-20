import React from "react";
import "./style.css";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { steps as vsCodeSteps } from "./VSCode/Steps";
import { steps as stackblitzSteps } from "./stackblitz/Steps";

//import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		//maxWidth: 360,
		//backgroundColor: theme.palette.background.paper,
	},
	tabs: {
		flexGrow: 1,
	},
	tabPanel: {
		padding: "10px",
	},
	buttons: {
		display: "flex",
		justifyContent: "space-around",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	const classes = useStyles();

	return (
		<div
			className={classes.tabPanel}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <div>{children}</div>}
		</div>
	);
}

function LessonSetup() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<div>
			<Paper className={classes.tabs}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered>
					<Tab label="VS Code" {...a11yProps(0)} />
					<Tab label="StackBlitz" {...a11yProps(1)} />
				</Tabs>
			</Paper>
			<TabPanel value={value} index={0}>
				<LessonSetupSteps steps={vsCodeSteps} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<LessonSetupSteps steps={stackblitzSteps} />
			</TabPanel>
		</div>
	);
}

function LessonSetupSteps(props) {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = props.steps;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const lastStep = activeStep === steps.length - 1;
	const reset = activeStep === steps.length;
	return (
		<div className={classes.root}>
			{!reset && <div className={classes.instructions}>{steps[activeStep].Content()}</div>}
			{reset ? (
				<div className={classes.buttons}>
					<Button onClick={handleReset}>Reset</Button>
				</div>
			) : (
				<div className={classes.buttons}>
					<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
						Back
					</Button>
					<Button disabled={reset} variant="contained" color="primary" onClick={handleNext}>
						{lastStep ? "Finish" : "Next"}
					</Button>
				</div>
			)}
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((step) => (
					<Step key={step.Text}>
						<StepLabel>{step.Text}</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
}

export default LessonSetup;
