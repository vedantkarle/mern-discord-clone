import Peer from "simple-peer";
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

const getConfig = () => {
	const turnIceServers = null;

	if (turnIceServers) {
		//TODO use Turn server credentials
	} else {
		console.warn("Using only STUN server");
		return {
			iceServers: [
				{
					urls: "stun:stun.l.google.com:19302",
				},
			],
		};
	}
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
	const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(stream => {
			store.dispatch(setLocalStream(stream));
			callbackFunc();
		})
		.catch(e => {
			console.error(e);
		});
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
	const localStream = store.getState().room.localStream;

	if (isInitiator) {
		console.log("preparing new peer connection as initiator");
	} else {
		console.log("preparing new peer connection as not initiator");
	}

	peers[connUserSocketId] = new Peer({
		initiator: isInitiator,
		config: getConfig(),
		stream: localStream,
	});

	peers[connUserSocketId].on("signal", data => {
		const signalData = {
			signal: data,
			connUserSocketId,
		};

		// signalPeerData(signalData)
	});

	peers[connUserSocketId].on("stream", remoteStream => {});
};
