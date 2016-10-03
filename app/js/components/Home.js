import React from 'react';
import { actionUploadJson, actionUploadJsonError } from '../actions/actionCreators';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    json: store.jsonEmployees,
    isLoaded: store.isLoaded,
    failed: store.failed,
    errorMsg: store.errorMsg,
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

  render() {
    console.log(this.props.isLoaded);
    return (
      <form className='main-col'>
        <label>Upload employees JSON file</label>
        <br /><br />
        <input type='file' ref='file' name='add-json-file' onChange={this.submitJson} id='add-json-file' />
        <br /><br />
        {this.props.isLoaded &&
          <a href='#' onClick={this.submitJson}>Load file</a>
        }
        {this.props.failed &&
          <div>{this.props.errorMsg}</div>
        }
      </form>
    );
  }
}

export default Home;
