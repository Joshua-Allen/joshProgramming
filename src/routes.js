import React from "react";
import { Root } from "./views/Root/Root";
import { Home } from "./views/Home/Home";
import Lessons from "./views/Lessons/Setup/Lessons-Setup";

// https://github.com/reacttraining/react-router/tree/master/packages/react-router-config
export const route = [
	{
		component: Root,
		routes: [
			{
				path: "/",
				exact: true,
				component: Home,
			},
			{
				path: "/Lessons",
				exact: true,
				component: Lessons,
			},
		],
	},
];
