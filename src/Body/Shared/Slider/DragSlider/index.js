import React from 'react'
import Slider from 'react-touch-drag-slider'

// here we are importing some images 
// but the Slider children can be an array of any element nodes, or your own components
// import images from './images'

function index() {

    const images = [
      {
        url:'',
        title:'hello',
         
      },
{
        url:'',
        title:'hello',
         
      },
{
        url:'',
        title:'hello',
         
      },


      
    ]

  return (
        <Slider
          onSlideComplete={(i) => {
            console.log('finished dragging, current slide is', i)
          }}
          onSlideStart={(i) => {
            console.log('started dragging on slide', i)
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
             <h1>{title}</h1>
          ))}
        </Slider>
  )
}

export default index;