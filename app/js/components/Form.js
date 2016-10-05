import React from 'react';

class Form extends React.Component {

  constructor() {
    super();
  }

  render() {
    let {
      isLoaded,
      failed,
      errorMsg,
      submitJson
    } = this.props;

    return (
      <form className='form'>

        <label className='form__label'>Upload employees JSON file</label>
        <input
          className='form__input'
          type='file'
          ref='file'
          name='add-json-file'
          onChange={submitJson}
          id='add-json-file'
        />

        {isLoaded && <Link to={'employees'}>Load file</Link>}
        {failed && <div>{errorMsg}</div>}
      </form>
    );
  }
}

export default Form;
