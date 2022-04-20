import Peer from "simple-peer";
import { setLocalStream } from "../actions/roomActions";
import { SET_REMOTE_STREAMS } from "../constants/roomConstants";
import store from "../store";
import { signalPeerData } from "./socketConnection";

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

		signalPeerData(signalData);
	});

	peers[connUserSocketId].on("stream", remoteStream => {
		remoteStream.connUserSocketId = connUserSocketId;
		addNewRemoteStream(remoteStream);
	});
};

export const handleSignalingData = signalingData => {
	const { connUserSocketId, signal } = signalingData;

	if (peers[connUserSocketId]) {
		peers[connUserSocketId].signal(signal);
	}
};

const addNewRemoteStream = remoteStream => {
	const remoteStreams = store.getState().room?.remoteStreams;
	const newRemoteStreams = [...remoteStreams, remoteStream];

	store.dispatch({
		type: SET_REMOTE_STREAMS,
		payload: { remoteStreams: newRemoteStreams },
	});
};

//handling for user who is leaving the room

export const closeAllConnections = () => {
	Object.entries(peers).forEach(mappedObject => {
		const connUserSocketId = mappedObject[0];
		if (peers[connUserSocketId]) {
			peers[connUserSocketId].destroy();
			delete peers[connUserSocketId];
		}
	});
};

//handling for other users if a user has left the room

export const handleParticipantLeftRoom = data => {
	const { connUserSocketId } = data;

	if (peers[connUserSocketId]) {
		peers[connUserSocketId].destroy();
		delete peers[connUserSocketId];
	}

	const remoteStreams = store.getState().room?.remoteStreams;

	const newRemoteStreams = remoteStreams.filter(
		stream => stream.connUserSocketId !== connUserSocketId,
	);

	store.dispatch({
		type: SET_REMOTE_STREAMS,
		payload: { remoteStreams: newRemoteStreams },
	});
};
