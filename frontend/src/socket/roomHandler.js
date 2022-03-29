import { setOpenRoom } from "../actions/roomActions";
import store from "../store";

export const createNewRoom = () => {
	store.dispatch(setOpenRoom(true, true));
};
