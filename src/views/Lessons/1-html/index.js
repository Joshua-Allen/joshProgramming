import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CodeBlock from "@tenon-io/tenon-codeblock";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import "@material-ui/core/Box";
import _html_ex1 from "./ex1";
//import "./style.css";
//import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	header: {
		borderLeft: "4px solid " + theme.palette.info.light,
		borderBottom: "1px solid " + theme.palette.info.light,
		//backgroundColor: theme.palette.info.light,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	fullBlock: {
		flexDirection: "column",
	},
}));

function Block(props) {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel2a-content"
				id="panel2a-header"
				className={props.classes.header}>
				<Typography className={props.classes.heading}>{props.name}</Typography>
			</AccordionSummary>
			<AccordionDetails className={props.classes.fullBlock}>{props.children}</AccordionDetails>
		</Accordion>
	);
}

function LessonSetup() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();

	return (
		<div className={classes.root}>
			<Typography align="center" variant="h5" paragraph={true}>
				HTML
			</Typography>

			<Block name="Intro" classes={classes}>
				<Typography>
					There is a lot of debate on whether or not html is a programming language because by
					itself it can’t do any logic. It is just a way to tell the other programs what a thing is.
					For example let's say you want a friend to know that your text that you are about to send
					is sarcastic, how would you let them know?
				</Typography>
			</Block>

			<Block name="Example of an element" classes={classes}>
				<Typography>
					Well if your friend was a computer you would probibly text them:
					<Typography variant="body2">
						{"<sarcastic>"}You're so cool{"</sarcastic>"}
					</Typography>
					With that (very mean) text you computer friend knows whe you start being sarcastic and
					when you stop.
				</Typography>
			</Block>

			<Block name="First look and a full html page" classes={classes}>
				<Box>
					<CodeBlock codeString={_html_ex1} language="html" />
				</Box>
				<Typography variant="body1" display="block">
					So as you can see your computer friend would have no problem reading this but let me help
					you out a bit.
					<ul>
						<li>
							{"<!DOCTYPE html>"} is a declaration that defines this document is an HTML5 document
						</li>
						<li>{"<html>"} is the root element of an HTML page</li>
						<li>{"<head>"} is the element that contains meta information about the HTML page</li>
						<li>{"<title>"} is the element that specifies a title for the HTML page</li>
						<li>
							{"<body>"} is the element that defines the document's body, and is a container for all
							the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists,
							etc.
						</li>
						<li>{"<h1>"} is the element that defines the largest heading</li>
						<li>{"<p>"} is the element that defines a paragraph</li>
					</ul>
				</Typography>
			</Block>

			<Block name="Elements" classes={classes}>
				<Typography>
					There are a lot of elements. Way to meny for me to go over them all. Let's take a look at
					a very helpful website:
				</Typography>
				<Typography>
					<Link href="https://www.w3schools.com/html/" onClick={preventDefault}>
						w3schools
					</Link>
				</Typography>
				<Typography>
					<Link href="https://www.w3schools.com/tags/default.asp" onClick={preventDefault}>
						Element reference list
					</Link>
				</Typography>
			</Block>

			<Block name="Example 1" classes={classes}>
				<Typography>Notice the h1. Is there an h2?</Typography>
				<Typography>Will all this space show up?</Typography>
				<Typography>Is there another way if creating a paragraph?</Typography>
			</Block>

			<Block name="Example 2" classes={classes}>
				<Typography>This is a little example of how images and links work.</Typography>
			</Block>

			<Block name="Dev tools" classes={classes}>
				<Typography>
					Let's take a look at your browsers dev tools so you can see what is going on.
				</Typography>
			</Block>

			<Block name="Homework" classes={classes}>
				<Typography>
					I would like each of you to go to your favorate website and find something in the code
					that you don't understand. Research it and tell the everyone about it, or if you still
					have no idea what it is I will go over it.
				</Typography>
			</Block>
		</div>
	);
}

export default LessonSetup;
