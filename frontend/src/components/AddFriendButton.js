import React, { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
import Btn from "./Btn";

const additionalStyles = {
	marginTop: "14px",
	marginLeft: "5px",
	width: "80%",
	height: "40px",
	background: "#3ba55d",
};

const AddFriendButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Btn
				onClick={() => setIsOpen(true)}
				additionalStyles={additionalStyles}
				label='AddFriend'
			/>
			<AddFriendDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
};

export default AddFriendButton;
