import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    json: store.employees.jsonEmployees,
    isLoaded: store.employees.isLoaded,
    failed: store.employees.failed,
    errorMsg: store.employees.errorMsg,
  };
})
class EmployeesView extends React.Component {
  render() {
    console.log('json ->', this.props.json);
    return (
      <div>
        <h4>EmployeesView page</h4>
      </div>
    );
  }
}

export default EmployeesView;
