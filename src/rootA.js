import React from 'react';

const Root = React.createClass({
  getInitialState() {
    return {
      name: ''
    };
  },

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  },

  render() {
    return (<div>
      <h1>Hello World!!</h1>
      <p>
        Please input your name here:
        <input onChange={this.handleChange} value={this.state.name} />
      </p>
      <p className="helloP">Hello, {this.state.name}</p>
    </div>);
  }

});

export default Root;
