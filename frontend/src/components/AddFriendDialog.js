import { Alert, Snackbar, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendInvitation } from "../actions/friendsActions";
import Btn from "./Btn";
import Input from "./Input";

const AddFriendDialog = ({ isOpen, onClose }) => {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);

	const dispatch = useDispatch();

	const { error: friendsError } = useSelector(state => state.friends);

	const handleCloseDialog = () => {
		onClose();
		setEmail("");
	};

	const handleSendInvitation = () => {
		dispatch(sendInvitation({ email }, handleCloseDialog, setSuccess));
	};

	return (
		<div>
			<Dialog open={isOpen} onClose={handleCloseDialog}>
				<DialogTitle style={{ backgroundColor: "#2F3136" }}>
					<Typography style={{ color: "white" }}>Invite a Friend</Typography>
				</DialogTitle>
				<DialogContent style={{ backgroundColor: "#2F3136" }}>
					<DialogContentText>
						<Typography style={{ color: "white" }}>
							Enter e-mail address of friend which you would like to invite
						</Typography>
					</DialogContentText>
					<Input label='Email' type='text' value={email} setValue={setEmail} />
				</DialogContent>
				<DialogActions style={{ backgroundColor: "#2F3136" }}>
					<Btn
						onClick={handleSendInvitation}
						label='Send'
						additionalStyles={{
							marginLeft: "15px",
							marginRight: "15px",
							marginBottom: "10px",
						}}
					/>
				</DialogActions>
			</Dialog>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={friendsError !== null}
				autoHideDuration={2000}>
				<Alert severity='error' sx={{ width: "100%" }}>
					{friendsError}
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={success}
				autoHideDuration={2000}>
				<Alert severity='success' sx={{ width: "100%" }}>
					Invitation was successfully sent
				</Alert>
			</Snackbar>
		</div>
	);
};

export default AddFriendDialog;
