import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      address: null,
      isnameReceived: false,
      isemailReceived: false,
      isaddressReceived: false,
      message: `Thanks for entering your `,
      isFormFinished: false,
      isShowResults: false,
      target: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let isFormFinished = false;
    if (this.inputNode.name === 'address') {
      isFormFinished = true;
    }
    const value = 'is' + this.inputNode.name + 'Received';
    this.setState({
      [value]: true,
      target: this.inputNode.name,
      isFormFinished: isFormFinished
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  printResults = e => {
    e.preventDefault();
    this.setState({
      isShowResults: true
    });
  };
  /*   isFormCompleted = () => {
      if(this.state.name && this.state.email && this.state.address){
      return true;
      } else {
      return false;
      }
    } */

  render() {
    return (
      <div>
        <h1>Survey</h1>
        <br />
        {this.state.isnameReceived ? (
          <h2 className="message">{this.state.message + this.state.target}</h2>
        ) : (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleInputChange}
              value={this.state.name || ''}
              ref={node => (this.inputNode = node)}
            />
            <input type="submit" />
          </form>
        )}

        {this.state.isnameReceived &&
          !this.state.isemailReceived && (
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={this.handleInputChange}
                value={this.state.email || ''}
                ref={node => (this.inputNode = node)}
              />
              <input type="submit" />
            </form>
          )}

        {this.state.isemailReceived && (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              disabled={this.state.isFormFinished}
              onChange={this.handleInputChange}
              value={this.state.isFormFinished ? '' : this.state.address}
              ref={node => (this.inputNode = node)}
            />
            {!this.state.isFormFinished ? (
              <input type="submit" disabled={this.state.isFormFinished} />
            ) : (
              <button
                onClick={this.printResults}
                disabled={!this.state.isFormFinished}
              >
                Show Results
              </button>
            )}
          </form>
        )}

        {this.state.isShowResults && (
          <div className="card">
            Your results are: <br />
            {this.state.name}
            <br />
            {this.state.email} <br />
            {this.state.address}
          </div>
        )}
      </div>
    );
  }
}

export default App;
