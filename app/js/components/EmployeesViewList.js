/* Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import { TweenMax, Power4 } from 'gsap';

/* Component */
import EmployeesViewItem from './EmployeesViewItem';

/**/
@connect((store) => {
  return {
    json: store.employees.jsonEmployees,
    isLoaded: store.employees.isLoaded
  };
})
class EmployeesViewList extends React.Component {
  generateEmployeesTree(data) {
  	const generateEmployeesSubTree = (employees) => {
    	return (
        <ul>{this.generateEmployeesTree(employees)}</ul>
      );
    }

    return data.map((node, index) => {
      let name = Object.keys(node)[0];
      let position = node[name].position;
      let employees = node[name].employees;
      let hasEmployees = employees.length > 0;

      return (
        <EmployeesViewItem
          key={index}
          name={name}
          position={position}
          hasSubTree={hasEmployees}
        >
          {generateEmployeesSubTree(employees)}
        </EmployeesViewItem>
      );
    })
  }

  componentWillMount() {
    // redirect to homepage is no JSON is available
    if(!this.props.isLoaded) {
      history.push('/');
    }
  }

  componentDidMount() {
    TweenMax.to(this.refs.list, .8, {
      transform: 'translateY(0)',
      opacity: 1,
      ease: Power4.easeInOut
    });
  }

  render() {
    let { json } = this.props;

  	return (
      <div className='employees-list' ref='list'>
        <label className='employees-list__label label'>Your company hierarchy</label>
        <ul>
        	{json && this.generateEmployeesTree([json])}
        </ul>
      </div>
    );
  }
}

export default EmployeesViewList;
