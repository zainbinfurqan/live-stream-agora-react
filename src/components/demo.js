import React, { Component } from "react";
import AgoraRTC from "agora-rtc-sdk";
import { isFirefox } from './common'
import './style.css'

let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });

const USER_ID = Math.floor(Math.random() * 1000000001);
const APP_ID = "1463feb9d18843cbb42af2db97112081";

let data_ = {
    streamID: USER_ID,
    audio: true,
    video: false,
    screen: true
}
let data__ = {
    streamID: USER_ID,
    audio: true,
    video: true,
    screen: false
}

// if (isFirefox()) {
//   streamSpec.mediaSource = 'window';
// } else if (!isCompatibleChrome()) {
//   streamSpec.extensionId = 'minllpmhdgpndnkomcoccfekfegnlikg';
// }
export default class Call extends Component {
    localStream
    localStreamScreenShare

    state = {
        remoteStreams: []
    };

    // componentDidMount() {
    //   console.log("this.props.channel", this.props.channel)

    // }

    // componentDidUpdate(prevProps, prevState) {
    //   console.log("this.props.channel=>", this.props.channel)
    //   if (prevProps.channel !== this.props.channel && this.props.channel !== "") {
    //     this.joinChannel();
    //   }
    // }

    // initLocalStream = () => {
    //   let me = this;
    //   me.localStream.init(
    //     function () {
    //       console.log("getUserMedia-1 successfully");
    //       me.localStream.play("agora_local");
    //       // client.publish(me.localStream)
    //     },
    //     function (err) {
    //       console.log("getUserMedia-1 failed", err);
    //     }
    //   );
    //   me.localStreamScreenShare.init(
    //     function () {
    //       console.log("getUserMedia-2 successfully");
    //       me.localStreamScreenShare.play("agora_local-screenshare");
    //       // client.publish(me.localStreamScreenShare)
    //     },
    //     function (err) {
    //       console.log("getUserMedia-2 failed", err);
    //     }
    //   );
    // };

    // initClient = () => {
    //   client.init(
    //     APP_ID,
    //     function () {
    //       console.log("AgoraRTC client initialized");
    //     },
    //     function (err) {
    //       console.log("AgoraRTC client init failed", err);
    //     }
    //   );
    //   this.subscribeToClient();
    // };

    // subscribeToClient = () => {
    //   let me = this;
    //   client.on("stream-added", me.onStreamAdded);
    //   client.on("stream-subscribed", me.onRemoteClientAdded);

    //   client.on("stream-removed", me.onStreamRemoved);

    //   client.on("peer-leave", me.onPeerLeave);
    // };

    // onStreamAdded = evt => {
    //   let me = this;
    //   let stream = evt.stream;
    //   console.log("New stream added: " + stream.getId());
    //   me.setState(
    //     {
    //       remoteStreams: {
    //         ...me.state.remoteStream,
    //         [stream.getId()]: stream
    //       }
    //     },
    //     () => {
    //       // Subscribe after new remoteStreams state set to make sure
    //       // new stream dom el has been rendered for agora.io sdk to pick up
    //       client.subscribe(stream, function (err) {
    //         console.log("Subscribe stream failed", err);
    //       });
    //     }
    //   );
    // };
    // joinStream = () => {
    //   // Join a channel
    //   client.join("yourToken", "myChannel", null, (uid) => {
    //     // Create a local stream
    //   });
    // }

    // joinChannel = () => {
    //   let me = this;
    //   console.log(" me.props.channel", me.props.channel)
    //   client.join(
    //     null,
    //     'zain ahmed',
    //     USER_ID,
    //     function (uid) {
    //       me.localStream.init(
    //         function () {
    //           console.log("getUserMedia-1 successfully");
    //           me.localStream.play("agora_local");
    //           client.publish(me.localStream, function (err) {
    //             console.log("Publish local stream error: " + err);
    //           });
    //         },
    //         function (err) {
    //           console.log("getUserMedia-1 failed", err);
    //         }
    //       );
    //       me.localStreamScreenShare.init(
    //         function () {
    //           console.log("getUserMedia-2 successfully");
    //           me.localStreamScreenShare.play("agora_local-screenshare");
    //           client.publish(me.localStreamScreenShare, function (err) {
    //             console.log("Pu blish local stream error: " + err);
    //           });
    //         },
    //         function (err) {
    //           console.log("getUserMedia-2 failed", err);
    //         }
    //       );
    //       // me.localStream.init(function(){})
    //       // console.log("User " + uid + " join channel successfully");
    //       // client.publish(me.localStream, function (err) {
    //       //   console.log("Publish local stream error: " + err);
    //       // });
    //       // client.publish(me.localStreamScreenShare, function (err) {
    //       //   console.log("Pu blish local stream error: " + err);
    //       // });

    //       // client.on("stream-published", function (evt) {
    //       //   console.log("Publish local stream successfully");
    //       // });
    //     },
    //     function (err) {
    //       console.log("Join channel failed", err);
    //     }
    //   );
    // };

    // onRemoteClientAdded = evt => {
    //   let me = this;
    //   let remoteStream = evt.stream;
    //   me.state.remoteStreams[remoteStream.getId()].play(
    //     "agora_remote " + remoteStream.getId(),
    //     "agora_remote-screenstreem " + remoteStream.getId()
    //   );
    // };

    // onStreamRemoved = evt => {
    //   let me = this;
    //   let stream = evt.stream;
    //   if (stream) {
    //     let streamId = stream.getId();
    //     let { remoteStreams } = me.state;

    //     stream.stop();
    //     delete remoteStreams[streamId];

    //     me.setState({ remoteStreams });

    //     console.log("Remote stream is removed " + stream.getId());
    //   }
    // };

    // onPeerLeave = evt => {
    //   let me = this;
    //   let stream = evt.stream;
    //   if (stream) {
    //     let streamId = stream.getId();
    //     let { remoteStreams } = me.state;

    //     stream.stop();
    //     delete remoteStreams[streamId];

    //     me.setState({ remoteStreams });

    //     console.log(evt.uid + " leaved from this channel");
    //   }
    // };

    // publishStream = () => {
    //   this.localStream = AgoraRTC.createStream({ ...data__ });
    //   // for screen share
    //   this.localStreamScreenShare = AgoraRTC.createStream({ ...data_ });
    //   // this.initLocalStream();
    //   this.initClient();
    //   this.joinChannel();
    //   client.publish(this.localStream, function (err) {
    //     console.log("Publish local stream error: " + err);
    //   });
    // }

    publishStream = () => {
        let me = this
        client.init(APP_ID);
        client.setClientRole('host');
        client.join('0061463feb9d18843cbb42af2db97112081IAD9qenWskeLGkf4SEVVRt1DrTMPZeft0fl4m0EyFYzJKR15j/sAAAAAEABVr+wwFIO3XwEAAQAVg7df', "zainahmed", null, (uid) => {
            // Create a local stream
            console.log('all ok')
            me.localStream = AgoraRTC.createStream({ ...data__ });
            me.localStream.init(
                function () {
                    console.log("getUserMedia-1 successfully");
                    me.localStream.play("agora_local");
                    client.publish(me.localStream, function (err) {
                        console.log("getUserMedia-1 failed", err);
                    });
                },
                function (err) {
                    console.log("getUserMedia-1 failed", err);
                }
            );
        }, function (err) {
            console.log('Error')
            console.log("Error: ", err);
        });

        // Join a channel

        // client.join('0061463feb9d18843cbb42af2db97112081IAD9qenWskeLGkf4SEVVRt1DrTMPZeft0fl4m0EyFYzJKR15j/sAAAAAEABVr+wwFIO3XwEAAQAVg7df', "zainahmed", null, (uid) => {
        //   // Create a local stream
        //   console.log('all ok')
        //   console.log(uid)
        // }, function (err) {
        //   console.log('Error')
        //   console.log("Error: ", err);
        // });
    }

    render() {
        return (
            <>
                <button onClick={this.publishStream}>create</button>
                <div className="streeming-main">
                    <div id="agora_local-screenshare" className="agora_local-screenshare" style={{}} />
                    <iframe className="agora_local-video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    {Object.keys(this.state.remoteStreams).map(key => {
                        let stream = this.state.remoteStreams[key];
                        let streamId = stream.getId();
                        return (
                            <div
                                key={streamId}
                                id={`agora_remote-screenstreem ${streamId}`}
                                className="agora_local-screenshare"
                            // style={{ width: "400px", height: "400px" }}
                            />
                        );
                    })}
                    <div id="agora_local" className="agora_local" style={{}} />

                    {Object.keys(this.state.remoteStreams).map(key => {
                        let stream = this.state.remoteStreams[key];
                        let streamId = stream.getId();
                        return (
                            <div
                                key={streamId}
                                id={`agora_remote ${streamId}`}
                                style={{ width: "400px", height: "400px" }}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}
