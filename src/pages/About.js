import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus
          lorem, fringilla eget dui vel, fringilla auctor nisl. Integer posuere
          tempor nibh vel porta. Quisque volutpat felis at accumsan semper.
          Proin tempus posuere elit in porttitor. Donec ultricies pretium lorem,
          pulvinar iaculis orci imperdiet et. Vestibulum dapibus interdum
          commodo. Mauris tempus finibus dolor. Ut purus arcu, tristique eget
          aliquet nec, efficitur vitae tortor. Vivamus vel varius lectus. Proin
          id eleifend lacus. Proin maximus vehicula facilisis.
        </p>
      </div>
    </div>
  )
}

export default About
