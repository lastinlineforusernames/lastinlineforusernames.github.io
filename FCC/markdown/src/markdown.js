import React from 'react';

const marked = require("marked");
marked.setOptions({
    breaks: true
})

class Markdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: defaultText
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    
    render() {
        const htmlResult = marked(this.state.input);
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="column title">Enter Markdown to be Parsed:</div>
                    <div className="column title">Markdown Preview:</div>
                </div>
                <div className="row">
                    <div className="column">
                        <textarea name="editor" id="editor" rows="40" onChange={this.handleChange}>
                           {this.state.input}
                        </textarea>
                    </div>
                    <div className="column markdownColumn">
                        <div name="preview" id="preview" dangerouslySetInnerHTML={{__html: htmlResult}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Markdown

const defaultText = 
`# Hello. I am a markdown previewer

## Type your markdown here and I will make a preview on the right!

I use [MarkedJS](https://marked.js.org/) to parse Markdown.

I can read code between backticks like this: \`<div>I am some code</div>\`.

\`\`\`
// I can make a code block:

function doStuff(stuff, things) {
    return stuff + things;
  }
}
\`\`\`
  
I can make **bold** text.

> I can make block quotes.

1. I can also make lists.
1. Numbered lists are cool. 
1. This is another list item.

I can also embed images:

![It's Kat!](https://pbs.twimg.com/profile_images/1252272464228421639/bbtidIQN_400x400.jpg)`