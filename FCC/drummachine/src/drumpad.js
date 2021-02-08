import React from 'react';
import {audioFiles} from './drummachine';

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
        return
    }
    render() {
        return (
            <div className={this.state.className} id={this.props.padID} onClick={this.handleClick}>
                {this.props.padID}
                <audio className="clip" src={this.props.audioSource} id={this.props.padID} />
            </div>
        )
    }
}

export default Drumpad