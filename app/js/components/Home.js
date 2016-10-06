/* Dependencies */
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { history } from '../store';
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
    this.showFeedback = this.showFeedback.bind(this);
    this.goToListPage = this.goToListPage.bind(this);
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

  showFeedback() {
    TweenMax.from(this.refs.feedback, .8, {
      top: '15px',
      position: 'relative',
      opacity: 0
    });
    TweenMax.to(this.refs.feedback, .8, {
      top: 0,
      opacity: 1,
      ease: Power4.easeInOut
    });
  }

  goToListPage(e) {
    e.preventDefault();

    TweenMax.to(this.refs.form, .8, {
      transform: 'translateY(30px)',
      opacity: 0,
      ease: Power4.easeInOut,
      onComplete: () => history.push('/employees')
    });
  }

  componentDidUpdate() {
    this.showFeedback();
  }

  render() {
    let { isLoaded, failed, errorMsg } = this.props;

    return (
      <form ref='form' className='form'>

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
          <span ref='feedback' className='form__button button button--blue'>
            <a onClick={this.goToListPage} ref='upload' href='#'>upload</a>
          </span>
        }

        {failed &&
          <span ref='feedback' className='error error--red'>{errorMsg}</span>
        }
      </form>
    );
  }
}

export default Home;
