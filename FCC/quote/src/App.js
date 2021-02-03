import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'This is a Quote',
      author: 'Quotey McQuotenstein'
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    let newQuote = quoteData[Math.floor(Math.random() * quoteData.length)]
    this.setState({
      text: newQuote.text,
      author: newQuote.author
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.text}</div>
        <div id="author">{this.state.author}</div>
        <br/>
        <div id="button-wrapper">
          <div className="row">
            <div className="column">
              <a href={`https://twitter.com/intent/tweet?text=${this.state.text} - ${this.state.author}`} id="tweet-quote">Tweet</a>
            </div>
            <div className="column"></div>
            <div className="column">
              <button id="new-quote" onClick={this.getQuote}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const quoteData = [
  {
    text: "It's awfully cold out, isn't it?",
    author: 'Ted from Sales'
  },
  {
    text: "Oh, that sandwich looks good! Is it from the new place on the corner?",
    author: 'The dude that sits next to me at lunch'
  },
  {
    text: "I like cheese.",
    author: 'Me'
  },
  {
    text: "Meow. My food bowl is not empty, but I shall behave as such. Meow.",
    author: 'Bob the Cat'
  },
  {
    text: "Does that come with mayonnaise on it? Well, in that case, please hold the mayo.",
    author: 'Someone that does not like mayonnaise ordering a burger at a restaurant'
  }
]

export default App;
