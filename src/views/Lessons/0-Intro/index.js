import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import "./style.css";
//import Routes from "./routes";

function LessonSetup() {
	const value = "Lesson 0 - intro";
	return (
		<Box>
			<Typography align="center" variant="h5" paragraph={true}>
				Introduction to the class
			</Typography>
			<hr />

			<Typography align="center" variant="h5" paragraph={true}>
				Goal
			</Typography>
			<Typography align="left" variant="body1" paragraph={true}>
				I would like for you to be able to write and edit javascript for whatever task you need. I
				plan on teaching the concepts by having you create small games. Sadly I can't jump right
				into javascript because by its self it is not that powerful. You must have a basic
				understanding of both HTML and CSS before doing anything in javascript. So at the end of the
				class you should:
				<ul>
					<li>Have a firm understanding of javascript</li>
					<li>Have a firm understanding of HTML</li>
					<li>Have an understanding of CSS</li>
					<li>Be able to teach yourself new things</li>
				</ul>
			</Typography>

			<Typography align="center" variant="h5" paragraph={true}>
				What it is to be a programmer
			</Typography>
			<Typography align="left" variant="body1" paragraph={true}>
				There are many levels of being a programmer. Some like to be at the lowest level messing
				with ones and zeros but others like the high level life where they are able to create
				quickly and effectively. Personally I’m more on the lower level side of things but there is
				absolutely nothing wrong with not knowing binary. But it doesn't matter at what level you
				like to be at, as a programmer you should never stop learning. You will never know
				everything and there will always be new things.
			</Typography>

			<Typography align="center" variant="h5" paragraph={true}>
				There is just so much!
			</Typography>
			<Typography align="left" variant="body1" paragraph={true}>
				I know. I really know. But programmers are some of the best people. We love to share and
				help whoever needs it. We were all beginners at one point and we all had a friendly
				programmer help us along the way.
			</Typography>

			<Typography align="center" variant="h5" paragraph={true}>
				Keep in mind
			</Typography>
			<Typography align="left" variant="body1" paragraph={true}>
				There is no 'right' way to program. There are definitely wrong ways and you will find many
				wrong ways to do things but no two programmers will create an identical program. So take
				what I teach you with a grain of salt and go out and find your own style.
			</Typography>
		</Box>
	);
}

export default LessonSetup;
