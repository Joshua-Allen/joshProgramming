import { Root } from "./views/Root/Root";
import { Home } from "./views/Home/Home";
import Lessons from "./views/Lessons/Base";
//import Lessons from "./views/Lessons/Setup/Lessons-Setup";

// https://github.com/reacttraining/react-router/tree/master/packages/react-router-config
export const route = [
	{
		name: "Root",
		component: Root,
		routes: [
			{
				name: "Josh Programming",
				path: "/",
				exact: true,
				component: Home,
			},
			{
				name: "Lessons",
				path: "/Lessons",
				exact: true,
				component: Lessons,
			},
		],
	},
];
