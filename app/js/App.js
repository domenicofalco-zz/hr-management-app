import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isJsonLoaded: false };
  }
  render() {
    return (
    <div>
        <h1>App.js</h1>
        <div className=''>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
