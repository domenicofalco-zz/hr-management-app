/* Dependencies */
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { TweenMax, Power4 } from 'gsap';

/* component */
import FileInput from 'react-file-input';

/* Redux Actions */
import {
  actionUploadJson,
  actionUploadJsonError,
  actionClearState
} from '../actions/actionCreators';

/**/
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
    this.showNext = this.showNext.bind(this);
  }

  submitJson(e) {
    e.preventDefault();

    let file = e.target.files[0];
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

  showNext() {
    TweenMax.from(this.refs.nextStep, .8, {
      top: '15px',
      position: 'relative',
      opacity: 0
    });
    TweenMax.to(this.refs.nextStep, .8, {
      top: 0,
      opacity: 1,
      ease: Power4.easeInOut
    });
  }

  componentDidUpdate() {
    this.showNext();
  }

  render() {
    let { isLoaded, failed, errorMsg } = this.props;

    return (
      <form className='form'>

        <label className='form__label label'>Choose your JSON file</label>

        <FileInput
          id='add-json-file'
          name="add-json-file"
          accept="json"
          placeholder="My Image"
          className="form__input"
          onChange={this.submitJson}
        />

        {isLoaded &&
          <span ref='nextStep' className='form__button button button--blue'>
            <Link
              ref='upload'
              to={'employees'}>
              upload
            </Link>
          </span>
        }

        {failed &&
          <span ref='nextStep' className='error error--red'>{errorMsg}</span>
        }
      </form>
    );
  }
}

export default Home;
