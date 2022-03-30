import { setLocalStream } from "../actions/roomActions";
import store from "../store";

const onlyAudioConstraints = {
	audio: true,
	video: false,
};

const defaultConstraints = {
	audio: true,
	video: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
	const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(stream => {
			console.log(stream);
			store.dispatch(setLocalStream(stream));
			callbackFunc();
		})
		.catch(e => {
			console.error(e);
		});
};
