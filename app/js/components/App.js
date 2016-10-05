import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { location, children } = this.props;

    return (
    <div>
        <div className='container container--bg-dark'>
          <Header pathname={location.pathname} />
        </div>
        <div className='container container--bg-yellow'>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
