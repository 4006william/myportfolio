import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import Sushi from '../images/sushi.jpeg'
import Makeup from '../images/makeup.png'
import Calc from '../images/calc.jpg'


//images sliding in the soccer component 

class ProjectImages extends Component {
   
  render(){
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next .tree',
        prevEl: '.swiper-button-prev'
      },
      containerClass: 'swiper-container'
    }
    const beauticenter = () => {
      window.location.href="#beauticenter"
    }
    const sushi = () => {
      window.location.href="#sushi"
    }
     const calc = () => {
      window.location.href="#calc"
    }
  return (
      <div className="projectImages">
          <Swiper {...params}>
          <button onClick={beauticenter}><p>BeautiCenter</p><img src={Makeup} alt={<p>makeup img</p>} /></button>
          <button onClick={sushi}><p>Sushi Restaurants</p><img src={Sushi} alt={<p>sushi</p>} /></button>
          <button onClick={calc}><p>Scientific Calculator</p><img src={Calc} alt={<p>calculator</p>} /></button>
          </Swiper>
    </div>
  )}
};
export default ProjectImages;