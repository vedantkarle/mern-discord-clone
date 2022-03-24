import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { logout } from "../utils/auth";

export default function DropdownMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton onClick={handleClick} style={{ color: "white" }}>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</div>
	);
}
