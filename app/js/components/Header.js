import React from 'react';

class Header extends React.Component {
  render() {
    let isActive = this.props.pathname === '/employees';

    return (
      <header className='header'>
        <h1 className='header__title'>HR Management System</h1>
        {isActive && <span>Link upload new file</span>}
      </header>
    );
  }
}

export default Header;
