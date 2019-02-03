import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      font: "Nunito",
      size: 12,
      weight: "normal",
      text: "Your sample text will appear here"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  handleChange(event) {
    var stateValue = Object.keys(this.refs)[0];
    console.log(this.state[stateValue]);
    this.setState({ [stateValue]: event.target.value });
  }
  handleGoogleChange(event) {
    this.setState({ font: event.target.value });
  }
  handleWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  handleSizeChange(event) {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: 12 });
    } else if (parseInt(event.target.value, 10) > 80) {
      this.setState({ size: 80 });
    } else {
      this.setState({ size: parseInt(event.target.value, 10) });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>React Font Previewer</h1>
        <div className="body">
          Font Family :
          <select onChange={this.handleChange}>
            <option ref="font">Helvetica</option>
            <option ref="font">Times</option>
            <option ref="font">Impact</option>
            <option ref="font">Courier</option>
            <option ref="font">Verdana</option>
          </select>
          <br />
          Google Font :
          <select onChange={this.handleChange}>
            <option ref="font">Nunito</option>
            <option ref="font">Karla</option>
            <option ref="font">Roboto</option>
            <option ref="font">Staatliches</option>
            <option ref="font">Charm</option>
          </select>
          <br />
          Font Weight :
          <select onChange={this.handleWeightChange}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
            <option value="lighter">lighter</option>
          </select>
          <br />
          Font Size
          <br />
          <input
            value={this.state.value}
            onChange={this.handleSizeChange}
            type="text"
            placeholder="12"
            id="size"
          />
          <link
            href={"https://fonts.googleapis.com/css?family=" + this.state.font}
            rel="stylesheet"
          />
          <p
            style={{
              fontFamily: this.state.font,
              fontWeight: this.state.weight,
              fontSize: this.state.size
            }}
          >
            {this.state.text}
          </p>
          <textarea
            placeholder="Type something here and see what happens..."
            onChange={e => this.setState({ text: e.target.value })}
            cols="30"
            rows="10"
          />
        </div>
      </div>
    );
  }
}

export default App;
