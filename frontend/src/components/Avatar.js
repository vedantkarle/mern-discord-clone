import { styled } from "@mui/system";
import React from "react";

const AvatarPreview = styled("div")({
	height: "40px",
	width: "40px",
	backgroundColor: "#5865f2",
	borderRadius: "42px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "20px",
	fontWeight: "700",
	marginLeft: "5px",
	color: "white",
});

const Avatar = ({ username, large }) => {
	return (
		<AvatarPreview
			style={
				large
					? {
							height: "70px",
							width: "70px",
					  }
					: {}
			}>
			{username.substring(0, 2)}
		</AvatarPreview>
	);
};

export default Avatar;
