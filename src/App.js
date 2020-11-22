import React, { Component } from "react";
import ChannelForm from "./components/ChannelForm";
import Call from "./components/Call";
import { Jutsu } from 'react-jutsu'
import AgoraCalling from './Agora'
// class App extends Component {
//   render() {
//     return (
//       <>
//       </>
//     )
//   }
// }

// function App() {
//   return (
//     <AgoraCalling />
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "",
      displayName: '',
      roomName: '',
      password: '',
      onCall: false
    };
  }

  selectChannel = channel => {
    this.setState({ channel });
  };

  //   // componentDidMount() {
  //   //   // let palndrom_new = Str_n.split('').reverse().join('')
  //   //   // palndrom_new === Str_n ? console.log('isPalandrom') : console.log('isNotPalandrom')
  //   //   // console.log(palndrom_new)
  //   //   function isPalindrome(string) {
  //   //     if (string.length <= 1) {
  //   //       return true;
  //   //     }

  //   //     let [firstLetter] = string;
  //   //     let lastLetter = string[string.length - 1];

  //   //     if (firstLetter === lastLetter) {
  //   //       let stringWithoutFirstAndLastLetters = string.substring(
  //   //         1,
  //   //         string.length - 1
  //   //       );
  //   //       return isPalindrome(stringWithoutFirstAndLastLetters);
  //   //     } else {
  //   //       return false;
  //   //     }
  //   //   }
  //   //   console.log(isPalindrome('abcddcba'))
  //   // }

  //   setRoom = (e) => {
  //     this.setState({ roomName: e })
  //   }

  //   setName = (e) => {
  //     this.setState({ displayName: e })
  //   }

  //   setPassword = (e) => {
  //     this.setState({ password: e })
  //   }

  //   setOnCall = (flag) => {
  //     this.setState({ onCall: flag })
  //   }

  //   handleClick = event => {
  //     console.log(event)
  //     event.preventDefault()
  //     this.setState({ onCall: true })
  //   }

  render() {
    return (
      <a href="intent://scan/#Intent;scheme=com.mychat.android;package=com.mychat.android;end">
        <p>Open App</p>
      </a>
      // <div className="App">
      //   <ChannelForm selectChannel={this.selectChannel} />
      //   <Call channel={this.state.channel} />
      // </div>
      //       // <div>
      //       //   {console.log(this.state.onCall)}
      //       //   <h2>&lt;Jutsu /&gt; Demo !</h2>
      //       //   <blockquote>View the <a href='https://github.com/this-fifo/jutsu'>source</a> for Jutsu and check <a href='https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md'>jitsi-meet</a> for the Jitsi Meet API</blockquote>
      //       //   {this.state.onCall ? (<Jutsu
      //       //     roomName={this.state.roomName}
      //       //     password={this.state.password}
      //       //     displayName={this.state.displayName}
      //       //     onMeetingEnd={() => console.log('Meeting has ended')}
      //       //     loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
      //       //     : (
      //       //       <form>
      //       //         <input id='room' type='text' placeholder='Room' value={this.state.room} onChange={(e) => this.setRoom(e.target.value)} />
      //       //         <input id='name' type='text' placeholder='Name' value={this.state.name} onChange={(e) => this.setName(e.target.value)} />
      //       //         <input id='password' type='text' placeholder='Password (optional)' value={this.state.password} onChange={(e) => this.setPassword(e.target.value)} />
      //       //         <button onClick={this.handleClick} type='submit'>
      //       //           Start / Join
      //       //       </button>
      //       //       </form>
      //       //     )}
      //       //   <p>Made with <span role='img' aria-label='coffee'>☕</span> by <a href='https://github.com/this-fifo'>Filipe Herculano</a></p>
      //       //   <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      //       // </div>
    );
  }
}

export default App;
