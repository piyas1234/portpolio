import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import './TimderSlider.css'
import image from '../../../images/profile4.png'
import MediumHeading from '../UI/MediumHeading'
const db = [
  {
    name: 'Merin Developer',
    url: image
  },
  {
    name: 'Javascript Developer',
    url: image
  },
  {
    name: 'React.Js Developer',
    url: image
  },
  {
    name: 'node.Js Developer',
    url: image
  },
  {
    name: 'Python Developer',
    url: image
  },
{
    name: 'Djnago Developer',
    url: image
  },



]

function TinderSlide () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="tinderSlider">
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      
      <div  className='cardContainer'>
        {characters.map((character) =>
          <TinderCard   className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div  className='m-auto text-center'>
            <img style={{width:"300px", borderRadius:"200px",backgroundColor:"",boxShadow:"0px 0px 10px 0px white"}} src={character.url} alt="" />
               <MediumHeading text={character.name}></MediumHeading>
            </div>
            
          </TinderCard>
        )}
      </div>
      
    </div>
  )
}

export default TinderSlide