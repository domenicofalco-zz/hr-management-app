import React from 'react';

class Home extends React.Component {

  constructor() {
    super();

    this.state = { json: null };
    this.submitJson = this.submitJson.bind(this);
  }

  submitJson(e) {
    e.preventDefault();
    let file = this.refs.file.files[0];
    let regex = /\.(json)$/i;
    let reader = new FileReader();

    if(regex.test(file.name)) {

      reader.onload = (event) => {
        this.setState({
          json: JSON.parse(event.target.result)
        });
      };

      reader.readAsText(file);

    } else {
      alert('The file must be a JSON type');
    }

  }

  render() {
    console.log('yeah', this.state.json);
    return (
      <form className='main-col'>
        <label>Upload employees JSON file</label>
        <br /><br />
        <input type='file' ref='file' name='add-json-file' id='add-json-file' />
        <br /><br />
        <button onClick={this.submitJson}>submit</button>
      </form>
    );
  }
}

export default Home;
