import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import a from '../../image/1.jpg';
import b from '../../image/2.jpg';
import c from '../../image/2.jpg';
export default class Box1 extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a}
            alt="Third slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
