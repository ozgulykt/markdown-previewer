import React, { Component } from 'react';
import Editor from './component/Editor';
import { placeholder } from './utilities/Veriables';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: placeholder
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    const { text } = this.state;
    const markdown = marked(text);
    return (
      <div className="App row container">
        <div className="col-6">
          <div id="preview" className="form-control" dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}}/>
        </div>
        <div className="col-6">
          <Editor onChange={this.handleChange} 
          value={this.state.text}/>
        </div>
      </div>
    );
  }
}




export default App;
