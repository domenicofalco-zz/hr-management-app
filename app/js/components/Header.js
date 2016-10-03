import React from 'react';

class Header extends React.Component {
  render() {

    let isActive = this.props.pathname === '/employees';

    return (
      <div className='wrapper'>
        <header className='main-col'>
          <h1>HR Management System</h1>
          {isActive &&
            <span>qui va il bottone per un nuovo upload</span>
          }
        </header>
      </div>
    );
  }
}

export default Header;
