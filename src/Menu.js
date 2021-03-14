import React from "react";
import { route, getRoutes } from "./routes";
import { withStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={3}
		getContentAnchorEl={null}
		transitionDuration={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

const MenuLinkStyle = makeStyles(
	(theme) => ({
		root: {
			textDecoration: "none",
			color: "inherit",
		},
	}),
	{ name: "MenuLink" }
);

const MenuLink = React.forwardRef((props, ref) => {
	const location = useLocation();
	const branch = matchRoutes(route, location.pathname);
	const curBranch = branch[branch.length - 1].route;
	const disabled = curBranch.path === props.to;

	const classes = MenuLinkStyle();
	const { onClick, children } = props;

	return (
		<Link to={props.to} className={classes.root}>
			<StyledMenuItem disabled={disabled} onClick={onClick}>
				<ListItemText primary={children} />
			</StyledMenuItem>
		</Link>
	);
});

export default function MainMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const routes = getRoutes().filter((e) => e.menu != null);
	//console.log(routes);

	return (
		<div>
			<IconButton
				edge="start"
				aria-controls="customized-menu"
				disableFocusRipple={true}
				aria-haspopup="true"
				variant="contained"
				aria-label="menu"
				color="inherit"
				onClick={handleClick}>
				<MenuIcon />
			</IconButton>
			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				{routes.map((route, index) => {
					return (
						<MenuLink key={index} onClick={handleClose} to={route.path}>
							{route.menu}
						</MenuLink>
					);
				})}
			</StyledMenu>
		</div>
	);
}
