import React from "react";
import Btn from "./Btn";

const additionalStyles = {
	marginTop: "14px",
	marginLeft: "5px",
	width: "80%",
	height: "40px",
	background: "#3ba55d",
};

const AddFriendButton = () => {
	return <Btn additionalStyles={additionalStyles} label='AddFriend' />;
};

export default AddFriendButton;
