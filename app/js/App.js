/*
  Import Dependencies
*/
import React from 'react';

/*
  Import Components
*/
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isJsonLoaded: false };
  }
  render() {
    return (
    <div>
        <Header pathname={this.props.location.pathname} />
        <div className=''>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
