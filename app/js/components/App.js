/*
  Import Dependencies
*/
import React from 'react';

/*
  Import Components
*/
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
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
