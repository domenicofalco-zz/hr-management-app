/* Dependencies */
import React from 'react';
import Header from './Header';
import { TweenMax, Power4 } from 'gsap';

/**/
class App extends React.Component {
  constructor() {
    super();

    this.start = this.start.bind(this);
  }

  start(e) {
    e.preventDefault();

    TweenMax.to(this.refs.shape, 1, {
      boxShadow: 'inset -5px 0px 5px 0px #65ac8e',
      height: '200%',
      left: '-12%',
      top: '-30%',
      transform: 'rotate(10deg)',
      width: '50%',
      ease: Power4.easeInOut
    });

    TweenMax.to(this.refs.header, 1, {
      width: '40%',
      ease: Power4.easeInOut
    });

  }

  render() {
    let { location, children } = this.props;

    return (
      <div className='global-container'>
        <div ref='header' className='container header col z3'>
          <Header start={this.start} />
        </div>

        <div className='container section col z1'>
          {children}
        </div>

        <div ref='shape' className='shape z2'></div>
      </div>
    );
  }
}

export default App;
