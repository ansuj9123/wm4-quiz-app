import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItem } from "./MainNavbarItem";

function Sidebar() {
	const drawerWidth = 220;
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar />
			<Divider />
			<Divider />
			<List>
				{mainNavbarItem.map((text) => (
					<ListItem key={text.id} disablePadding>
						<ListItemButton>
							<ListItemIcon>{text.icon}</ListItemIcon>
							<ListItemText primary={text.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}

export default Sidebar;
