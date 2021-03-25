import { Root } from "./views/Root/Root";
import { Home } from "./views/Home/Home";
import Lessons from "./views/Lessons/Base";
//import Lessons from "./views/Lessons/Setup/Lessons-Setup";

// https://github.com/reacttraining/react-router/tree/master/packages/react-router-config
export const route = [
	{
		title: "Root",
		component: Root,
		routes: [
			{
				title: "Josh Programming",
				menu: "Home",
				path: "/",
				exact: true,
				component: Home,
			},
			{
				title: "Lessons",
				menu: "Lessons",
				exact: true,
				path: "/Lessons",
				component: Lessons,
				routes: [
					{
						path: "/Lessons/:id",
						component: Lessons,
					},
				],
			},
		],
	},
];

export function getRoutes() {
	const routeObjectArray = [];

	const rec = function (ar, depth) {
		ar.forEach((e) => {
			let copiedRoute = Object.assign({}, e);
			copiedRoute.depth = depth;
			delete copiedRoute.routes;

			routeObjectArray.push(copiedRoute);
			if (e.routes != null) {
				rec(e.routes, depth + 1);
			}
		});
	};
	rec(route, 0);

	return routeObjectArray;
}
