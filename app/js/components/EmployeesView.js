/* Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';

/* Component */
import EmployeesViewList from './EmployeesViewList';

//fake json
let jsonEmployees = {
   "Jonas":{
      "position":"CTO",
      "employees":[
         {
          "mimmo": {
            "position":"VP Engineering",
            "employees":[]
          }
         },
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
    //json: jsonEmployees, // fake data
    json: store.employees.jsonEmployees,
    isLoaded: store.employees.isLoaded
  };
})
class EmployeesView extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // redirect to homepage is no JSON is available
    if(!this.props.isLoaded) {
      history.push('/');
    }
  }

  render() {
    let employeesJson = this.props.json;
    let team = '';
    let html = [];
    let indentation = 0;
    let i = 0;

    const print = (employeesJson) => {
    	const name = Object.keys(employeesJson)[0];
      const pos = employeesJson[name].position;

      i++;
      html.push(
        <div key={i} className={`employees-table__td level-${indentation}`}>
          <div className='name'>{name}</div>
          <div className='position'>{pos}</div>
        </div>
      );

    	employeesJson[name].employees.forEach((e) => {
        if(team !== name) {
          team = name;
          indentation++;
        }
        print(e);
      });
    }

    if(employeesJson) {
      print(employeesJson);
    }

    return (
      <div>
        <label className='employees-table__label label'>Employees list</label>
        <EmployeesViewList items={html} />
      </div>
    );
  }
}

export default EmployeesView;
