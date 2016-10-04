import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/*
  Redux Actions
*/
import {
  actionUploadJson,
  actionUploadJsonError,
  actionClearState
} from '../actions/actionCreators';


@connect((store) => {
  return {
    json: store.employees.jsonEmployees,
    isLoaded: store.employees.isLoaded,
    failed: store.employees.failed,
    errorMsg: store.employees.errorMsg,
  };
})
class Home extends React.Component {

  constructor() {
    super();

    this.submitJson = this.submitJson.bind(this);
  }

  submitJson(e) {
    e.preventDefault();

    let file = this.refs.file.files[0];
    let regex = /\.(json)$/i;
    let reader = new FileReader();

    if(regex.test(file.name)) {

      reader.onload = (event) => {
        let json = JSON.parse(event.target.result);
        this.props.dispatch(actionUploadJson(json));
      };

      reader.readAsText(file);

    } else {
      this.props.dispatch(actionUploadJsonError('The file must be a JSON type!'));
    }

  }

  componentWillMount() {
    this.props.dispatch(actionClearState());
  }

  render() {
    return (
      <form className='main-col'>
        <label>Upload employees JSON file</label>
        <br /><br />
        <input type='file' ref='file' name='add-json-file' onChange={this.submitJson} id='add-json-file' />
        <br /><br />
        {this.props.isLoaded &&
          <Link to={'employees'}>Load file</Link>
        }
        {this.props.failed &&
          <div>{this.props.errorMsg}</div>
        }
      </form>
    );
  }
}

export default Home;
