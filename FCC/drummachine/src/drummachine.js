import React from 'react';
import Drumpad from './drumpad'

export const audioFiles = [{
        id: 'Q',
        name: 'drumsQ',
        url: './audio/808-clap-01.wav'
    }, {
        id: 'W',
        name: 'drumsW',
        url: './audio/808-clap-01.wav'
    }, {
        id: 'E',
        name: 'drumsE',
        url: './audio/808-clap-01.wav'
    }, {
        id: 'A',
        name: 'drumsA',
        url: './audio/808-clap-01.wav'
    }, {
        id: 'S',
        name: 'drumsS',
        url: './audio/808-clap-01.wav'
    }, {
        id: 'D',
        name: 'drumsD',
        url: '/audio/808-clap-01.wav'
    }, {
        id: 'Z',
        name: 'Kick',
        url: '/audio/808-clap-01.wav'
    }, {
        id: 'X',
        name: 'Snare',
        url: '/audio/808-clap-01.wav'
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
                display: e.code
            })
        } else {
            this.setState({
                display: ''
            })
        }
        console.log(e.code.charAt(3))
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
                <div className="title" id="title">drumKAT</div>
                <div className="display" id="display">{this.state.display}</div>
            </div>
        )
    }
}

export default Drummachine