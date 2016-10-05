/* Dependencies */
import React from 'react';
import { TweenMax, Power4 } from 'gsap';

/**/
class Header extends React.Component {
  componentDidMount() {
    let { h1, h2, claim, button } = this.refs;
    let domElements = [h1, h2, claim, button];

    TweenMax.staggerFrom(domElements, 1, {
      top: '40px',
      opacity: 0,
      position: 'relative'
    }, 0.2);

    TweenMax.staggerTo(domElements, 1, {
      top: 0,
      opacity: 1,
      ease: Power4.easeInOut
    }, 0.2);

  }

  render() {
    return (
      <header className='header__container'>
        <hgroup className='header__heading'>
          <h1 ref='h1' className='header__title'>workonio</h1>
          <h3 ref='h2' className='header__subtitle'>your HR software manager</h3>
        </hgroup>
        <p ref='claim' className='header__claim'>
          Upload your JSON file to see your company hierarchy.
        </p>
        <span ref='button' className='header__button button button--white'>
          <a onClick={this.props.start}>let's start</a>
        </span>
      </header>
    );
  }
}

export default Header;
