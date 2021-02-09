import React from 'react';
import Drumpad from './drumpad'

export const audioFiles = [{
        id: 'Q',
        name: 'Hi Tom',
        url: './audio/808-tom-01.wav'
    }, {
        id: 'W',
        name: 'Lo Tom',
        url: './audio/808-tom-02.wav'
    }, {
        id: 'E',
        name: 'Crash',
        url: './audio/808-cymbal-01.wav'
    }, {
        id: 'A',
        name: 'Closed Hat',
        url: './audio/808-hat-01.wav'
    }, {
        id: 'S',
        name: 'Open Hat',
        url: './audio/808-hat-05.wav'
    }, {
        id: 'D',
        name: 'Clave',
        url: '/audio/808-clave-01.wav'
    }, {
        id: 'Z',
        name: 'Kick',
        url: '/audio/808-kick-30.wav'
    }, {
        id: 'X',
        name: 'Snare',
        url: '/audio/808-snare-01.wav'
    }, {
        id: 'C',
        name: 'Clap',
        url: '/audio/808-clap-01.wav'
    }];

class Drummachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padArray: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
            display: ''
        }
        this.handleKeydown = this.handleKeydown.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeydown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeydown);
    }
    handleKeydown(e) {
        if (this.state.padArray.includes(e.code.charAt(3))) {
            this.setState({
                display: audioFiles.filter(a => audioFiles.indexOf(a.id) === e.code.charAt(3)).name
            });
        };
    }
    render() {
        const drumPads = this.state.padArray.map(element => {
            return <Drumpad 
                audioSource={audioFiles[audioFiles.findIndex(e => e.id === element)].url} 
                keyIndex={audioFiles.findIndex(e => e.id === element)} 
                padID={element}/>
        });
        return (
            <div className="drum-machine" id="drum-machine">
                <div className="padwrapper" id="padWrapper">
                    {drumPads}
                </div>
                <div className="title" id="title">KATdrum</div>
                <div className="display" id="display">{this.state.display}</div>
            </div>
        )
    }
}

export default Drummachine