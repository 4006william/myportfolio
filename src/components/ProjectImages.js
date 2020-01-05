import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import Myday from '../images/myday.jpg'
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
      window.open('https://4006william.github.io/4ever21-store/#/', "_blank")
    }
    const myDay = () => {
      window.open('https://4006william.github.io/myDay/', "_blank")
    }
     const calc = () => {
      window.open('https://4006william.github.io/Scientific-Calculator/', "_blank")
    }
  return (
      <div className="projectImages">
          <Swiper {...params}>
          <button onClick={beauticenter}><p>4ever21 Store</p><img src={Makeup} alt={<p>makeup img</p>} /></button>
          <button onClick={myDay}><p>myDay</p><img src={Myday} alt={<p>myday img</p>} /></button>
          <button onClick={calc}><p>Scientific Calculator</p><img src={Calc} alt={<p>calculator</p>} /></button>
          </Swiper>
    </div>
  )}
};
export default ProjectImages;