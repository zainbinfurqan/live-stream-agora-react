import React, { useState } from 'react';
import AgoraRTC from "agora-rtc-sdk";

let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
client.setClientRole("host")
const USER_ID = Math.floor(Math.random() * 1000000001);
const APP_ID = "fc5136ca373f47599de2ef68059b1663";

let data__ = {
    streamID: USER_ID,
    audio: true,
    video: true,
    screen: false
}
let data_ = {
    streamID: USER_ID,
    audio: true,
    video: false,
    screen: true
}
let localStream_1 = null
let localStream_2 = null


function AgoraCalling() {

    const [channelName, setChannelName] = useState('')
    const [remoteStreams, setStream] = useState([])


    async function startStream() {
        client.init(APP_ID, () => { console.log("Client Init") });
        client.join(USER_ID, channelName, null, () => {
            console.log('user join')
            localStream_2 = AgoraRTC.createStream({ ...data__ });
            localStream_1 = AgoraRTC.createStream({ ...data_ });
            localStream_1.init(function () {
                localStream_1.play("agora_local");
                client.publish(localStream_1)
                client.on('stream-added', function (evt) {
                    onStreamAdded(evt)
                    // client.subscribe(evt.stream.handleFall)
                })
                client.on('stream-subscribed', function (evt) {
                    let stream = evt.stream
                    onRemoteClientAdded(stream)
                })
            })
            localStream_2.init(function () {
                localStream_2.play("agora_local_video");
                client.publish(localStream_2)
            })
        })
    }

    function onStreamAdded(evt) {
        let stream = evt.stream;
        console.log("New stream added: " + stream.getId());
        setStream(
            remoteStreams = {
                ...remoteStreams,
                [stream.getId()]: stream
            }
            , [
                client.subscribe(stream, function (err) {
                    console.log("Subscribe stream failed", err);
                })
            ])
    }
    function onRemoteClientAdded(evt) {
        let remoteStream = evt;
        remoteStreams[remoteStream.getId()].play(
            "agora_remote " + remoteStream.getId(),
            "agora_remote-screenstreem " + remoteStream.getId()
        );
    };

    return (
        <div>
            <input value={channelName} onChange={(e) => setChannelName(e.target.value)} />
            <button onClick={startStream}></button>
            <div id="agora_local" className="agora_local" style={{}} />
            <div id="agora_local_video" className="agora_local_video" style={{}} />

            {Object.keys(remoteStreams).map(key => {
                let stream = remoteStreams[key];
                let streamId = stream.getId();
                return (
                    <>
                        <div
                            key={streamId}
                            id={`agora_remote ${streamId}`}
                            style={{ width: "400px", height: "400px" }}
                        />
                        <div
                            key={streamId}
                            id={`agora_remote-screenstreem ${streamId}`}
                            style={{ width: "400px", height: "400px" }}
                        />
                    </>
                );
            })}
        </div>
    );
}

export default AgoraCalling;