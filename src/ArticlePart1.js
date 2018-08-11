import React, { Component } from 'react';
import './ArticlePart1.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import simpsons from './images/simpsons.png';

class ArticlePart1 extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '.transition';
    var tl = new TimelineLite();
    // tl.add(TweenLite.to('.App', .8, { backgroundColor: 'black' }));
    // tl.add(TweenLite.to('.App', .8, { backgroundColor: '#0000e6' }));
    // tl.add(TweenLite.to('.para-text', 0.5, { opacity: 1, x: 20 }));
    // tl.add(TweenLite.to('.leo-heading', 0.5, { opacity: 1, x: 20 }));
    // tl.add(TweenLite.to('.leo', 0.5, { opacity: 1, x: 30 }));

    var scene = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
        <div className="transition">(transition here)</div>
        <div className="heading">
          <img
            className="simpsons"
            alt="simpsons"
            src={simpsons}
            width="200"
            height="330"
          />
          <p className="para-text">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
        </div>{' '}
      </div>
    );
  }
}

export default ArticlePart1;
