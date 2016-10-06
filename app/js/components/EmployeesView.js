/* Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';

/* Component */
// import EmployeesView from './EmployeesView';

const jsonEmployees = {
   "Domenico":{
      "position":"CTO",
      "employees":[
         {
            "Sophie":{
               "position":"VP Engineering",
               "employees":[
                  {
                     "Nick":{
                        "position":"Team Lead",
                        "employees":[
                           {
                              "Pete":{
                                 "position":"Backend Engineer",
                                 "employees":[

                                 ]
                              }
                           },
                           {
                              "Barbara":{
                                 "position":"Fronted Engineer",
                                 "employees":[

                                 ]
                              }
                           }
                        ]
                     }
                  }
               ]
            }
         }
      ]
   }
};

@connect((store) => {
  return {
    json: jsonEmployees, // fake data
    //json: store.employees.jsonEmployees,
    isLoaded: store.employees.isLoaded
  };
})
class EmployeesView extends React.Component {
	constructor() {
  	super();
  }

  generateEmployeesTree(data) {

  	const generateEmployeesSubTree = (employees) => {
    	if (employees.length) {
      	return <ul>{this.generateEmployeesTree(employees)}</ul>
      }
    }

    return data.map((node, index) => {
      let name = Object.keys(node)[0];
      let position = node[name].position;
      let employees = node[name].employees;

      return (
        <Item
          key={index}
          name={name}
          position={position}
        >
          {generateEmployeesSubTree(employees)}
        </Item>
      );
    })
  }

  componentWillMount() {
    // redirect to homepage is no JSON is available
    if(!this.props.isLoaded) {
      //history.push('/');
    }
  }

  render() {
  	return (
      <ul className='employees-list'>
      	{this.generateEmployeesTree([this.props.json])}
      </ul>
    );
  }
}

const Item = props => {
	return (
    <li>
    	<span className='employees-list__name'>{props.name}</span>
      <span className='employees-list__position'>{props.position}</span>
        {props.children}
    </li>
  );
};

export default EmployeesView;
