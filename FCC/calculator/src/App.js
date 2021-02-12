import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      input: 0,
      previousOperand: '',
      decimalClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.value) {
      case "AC":
        this.setState({
          input: 0,
          previousOperand: '',
          decimalClicked: false
        })
        break;
      case "=":
        this.setState({
          // eslint-disable-next-line
          input: eval(this.state.input || 0),
          // eslint-disable-next-line
          answer: eval(this.state.input || 0),
          previousOperand: '',
        });
        break;
      case "+":
      case "*":
      case "/":
        if (this.state.previousOperand !== '' && this.state.previousOperand !== "-") {
          this.setState({
            input: (this.state.input.slice(0, this.state.input.length - 1) + e.value).replace(/^0/gm, ''),
            previousOperand: e.value
          })
        } else if (this.state.previousOperand === "-") {
          this.setState({
            input: (this.state.input.slice(0, this.state.input.length - 2) + e.value).replace(/^0/gm, ''),
            previousOperand: e.value,
            decimalClicked: false
          })
        } else {
          this.setState({
            input: (this.state.input + e.value).replace(/^0/gm, ''),
            previousOperand: e.value,
            decimalClicked: false
          })
        }
        break;
      case "-": 
        this.setState({
          input: (this.state.input + e.value).replace(/^0/gm, ''),
          previousOperand: e.value,
          decimalClicked: false
        })
        break;
      case ".": 
        if (this.state.decimalClicked) {
          break;
        } else {
          this.setState({
            input: (this.state.input + e.value).replace(/^0/gm, ''),
            previousOperand: '',
            decimalClicked: true
          });
        }
        break;
      default:
        this.setState({
          input: (this.state.input + e.value).replace(/^0/gm, ''),
          previousOperand: '',
        });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="grid-container">
          <div id="display" className="display">{this.state.input}</div>
          <div id="one" className="button number" data-value={1} onClick={e => this.handleClick(e.currentTarget.dataset)}>1</div>
          <div id="two" className="button number" data-value={2} onClick={e => this.handleClick(e.currentTarget.dataset)}>2</div>
          <div id="three" className="button number" data-value={3} onClick={e => this.handleClick(e.currentTarget.dataset)}>3</div>
          <div id="four" className="button number" data-value={4} onClick={e => this.handleClick(e.currentTarget.dataset)}>4</div>
          <div id="five" className="button number"data-value={5} onClick={e => this.handleClick(e.currentTarget.dataset)}>5</div>
          <div id="six" className="button number" data-value={6} onClick={e => this.handleClick(e.currentTarget.dataset)}>6</div>
          <div id="seven" className="button number" data-value={7} onClick={e => this.handleClick(e.currentTarget.dataset)}>7</div>
          <div id="eight" className="button number" data-value={8} onClick={e => this.handleClick(e.currentTarget.dataset)}>8</div>
          <div id="nine" className="button number" data-value={9} onClick={e => this.handleClick(e.currentTarget.dataset)}>9</div>
          <div id="zero" className="wide-button number" data-value={0} onClick={e => this.handleClick(e.currentTarget.dataset)}>0</div>
          <div id="decimal" className="button number" data-value="." onClick={e => this.handleClick(e.currentTarget.dataset)}>.</div>
          <div id="clear" className="wide-button ac" data-value="AC" onClick={e => this.handleClick(e.currentTarget.dataset)}>AC</div>
          <div id="add" className="button function" data-value="+" onClick={e => this.handleClick(e.currentTarget.dataset)}>+</div>
          <div id="subtract" className="button function" data-value="-" onClick={e => this.handleClick(e.currentTarget.dataset)}>-</div>
          <div id="multiply" className="button function" data-value="*" onClick={e => this.handleClick(e.currentTarget.dataset)}>×</div>
          <div id="divide" className="button function" data-value="/" onClick={e => this.handleClick(e.currentTarget.dataset)}>÷</div>
          <div id="equals" className="wide-button function" data-value="=" onClick={e => this.handleClick(e.currentTarget.dataset)}>=</div>
        </div>
      </div>
    )
  }
}