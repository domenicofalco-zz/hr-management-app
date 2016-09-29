import React from 'react';

class Header extends React.Component {
  render() {

    let isActive = this.props.pathname === '/employees';

    return (
      <div className='wrapper'>
        <header className='main-col'>
          <h1>HR Management System</h1>
          {isActive &&
            <a href='#'>Load JSON</a>
          }
        </header>
      </div>
    );
  }
}

export default Header;
