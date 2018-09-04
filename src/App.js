import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import EntryForm from './components/EntryForm';

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
    if (this.inputNode.name !== '') {
    this.setState({
      [value]: true,
      target: this.inputNode.name,
      isFormFinished: isFormFinished
    });
    }
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

  getInputNode = node => {
    console.log(node);
  };

  render() {
    return (
      <div>
        <h1>React Survey</h1>
        <br />
        {this.state.isnameReceived ? (
          < h2 className = "message" > {
            this.state.isFormFinished ? 'Thanks for completing the survey!' : this.state.message + this.state.target
          } < /h2>
        ) : (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleInputChange}
              value = {
                this.state.name || ''
              }
              ref={node => (this.inputNode = node)}
            />
            < button id = "submit-btn" type="submit"> Submit </button>
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
                value={ this.state.email || ''}
                ref={node => (this.inputNode = node)}
              />
              <button id="submit-btn" type="submit">Submit</button>
            </form>
          )}

        {this.state.isemailReceived && (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            {
              !this.state.isFormFinished && < input
              type="text"
              name="address"
              placeholder="Enter your address"
              disabled={this.state.isFormFinished}
              onChange={this.handleInputChange}
              value = {this.state.address || ''}
              ref={node => (this.inputNode = node)}
              /> }
            {!this.state.isFormFinished ? (
              <button
              className = "submit-btn"
              disabled = {
                this.state.isFormFinished
              }
              > Submit </button>
            ) : (
              this.state.isShowResults || < button className = "submit-btn"
                onClick={this.printResults}
              >
                {!this.state.isShowResults ? 'Show Results' : 'Results'}
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
