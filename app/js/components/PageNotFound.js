/* Dependencies */
import React from 'react';
import { history } from '../store';

/**/
class PageNotFound extends React.Component {
  componentWillMount() {
    history.push('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default PageNotFound;
