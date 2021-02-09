import './App.css';
import React from 'react';

//#region App
function App() {
  return (
    <div className="App">
        <div><Drummachine/></div>
    </div>
  );
}

export default App;
//#endregion

//#region Constants
const audioFiles = [{
  id: 'Q',
  name: 'Cheese',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/35[kb]hardcheeze.aif.mp3'
  // url: 'audio/808-tom-01.wav'
}, {
  id: 'W',
  name: 'Scratch',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/59[kb]vinyl_scratch_down.aif.mp3'
}, {
  id: 'E',
  name: 'Crash',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/61[kb]backwards-in-crash.aif.mp3'
}, {
  id: 'A',
  name: 'Closed Hat',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]brightchh.aif.mp3'
}, {
  id: 'S',
  name: 'Open Hat',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/88[kb]bigopenhh.aif.mp3'
}, {
  id: 'D',
  name: 'Sizzle',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/240[kb]hihat-sizzler.wav.mp3'
}, {
  id: 'Z',
  name: 'Kick',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/69[kb]absolutely-insane-kikdrum.wav.mp3'
}, {
  id: 'X',
  name: 'Snare',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/20[kb]twosds.aif.mp3'
}, {
  id: 'C',
  name: 'Explosion',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/114[kb]explosion_snare.aif.mp3'
}];
//#endregion

//#region DrumMachine
class Drummachine extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          padArray: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
          display: ''
      }
      this.handler = this.handler.bind(this);
  }
  handler(soundName) {
    this.setState({
      display: soundName
    });
    setTimeout(() => this.setState({display: ''}), 500)
  }
  render() {
      const drumPads = this.state.padArray.map(element => {
          return <Drumpad 
              audioSource={audioFiles[audioFiles.findIndex(e => e.id === element)].url} 
              name={audioFiles[audioFiles.findIndex(e => e.id === element)].name}
              keyIndex={audioFiles.findIndex(e => e.id === element)} 
              handler={this.handler}
              padID={element}/>
      });
      return (
          <div className="drum-machine" id="drum-machine">
              <div key="padwrapper" className="padwrapper" id="padWrapper">
                  {drumPads}
              </div>
              <div key="title" className="title" id="title">katDRUM</div>
              <div key="kat" className="kat" id="kat">
                <img key="imgkat" id="imgkat" src="https://pbs.twimg.com/profile_images/1252272464228421639/bbtidIQN_400x400.jpg" alt="It's Kat!" />
              </div>
              <div key="display" className="display" id="display">{this.state.display}</div>
          </div>
      )
  }
}
//#endregion

//#region DrumPad
class Drumpad extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          className: "drum-pad"
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
  }
  componentDidMount() {
      document.addEventListener("keydown", this.handleKeydown);
  }
  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeydown);
  }
  handleKeydown(e) {
      if (e.code === "Key" + this.props.padID) {
          this.handleClick(e);
      }
  }
  handleClick(e) {
      this.setState({className: "drum-pad playing"});
      setTimeout(() => this.setState({className: "drum-pad"}), 300);
      const audio = document.querySelector(`audio[id=${this.props.padID}]`);
      audio.currentTime = 0;
      audio.play();
      this.props.handler(this.props.name);
      return
  }
  render() {
      return (
          <div key={this.state.keyIndex} className={this.state.className} id={this.props.padID} onClick={this.handleClick}>
              {this.props.padID}
              <audio className="clip" src={this.props.audioSource} id={this.props.padID} />
          </div>
      )
  }
}
//#endregion