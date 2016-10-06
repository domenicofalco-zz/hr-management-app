import React from 'react';

class EmployeesViewItem extends React.Component {
  constructor() {
  	super();

    this.state = { isOpened: false }
    this.openEmployeesSubList = this.openEmployeesSubList.bind(this);
  }

  openEmployeesSubList(e) {
    e.preventDefault();

    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    let { hasSubTree, name, position, children } = this.props;
    let { isOpened } = this.state;

  	return (
      <li className='employees-list__item'>
        <div className='employees-list__info'>
          {hasSubTree &&
            <a
              href='#'
              onClick={this.openEmployeesSubList}
              className=
                {
                  'employees-list__collapse'
                  + (isOpened ? ' employees-list__collapse--close' : '')
                }
            >
              <span className='line-horz'></span>
              <span className='line-vert'></span>
            </a>
          }
        	<span className='employees-list__name'>{name}</span>
          <span className='employees-list__position'>{position}</span>
        </div>
        {hasSubTree && isOpened && children}
      </li>
    );
  }
};

export default EmployeesViewItem;
