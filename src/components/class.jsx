import React from 'react';

class MyClassComponent extends React.Component {
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);

    // Initialize the state for the component
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <div>Count: {this.state.count}</div>
      </div>
    );
  }
}

export default MyClassComponent;