import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudioOnly } from "../actions/roomActions";
import { logout } from "../utils/auth";

export default function DropdownMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();

	const { audioOnly } = useSelector(state => state.room);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAudioOnly = () => {
		dispatch(setAudioOnly(!audioOnly));
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
				<MenuItem onClick={handleAudioOnly}>
					{audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
				</MenuItem>
			</Menu>
		</div>
	);
}
