import React,{useEffect} from 'react'
import './CSSFiles/main.css'
import img from '/home/shreyarai0308/react4/src/Assets/img.jpg'
import img2 from '/home/shreyarai0308/react4/src/Assets/img2.jpg'
import img3 from '/home/shreyarai0308/react4/src/Assets/img3.jpg'
import img4 from '/home/shreyarai0308/react4/src/Assets/img4.jpg'
import img5 from '/home/shreyarai0308/react4/src/Assets/img5.jpg'
import img6 from '/home/shreyarai0308/react4/src/Assets/img6.jpg'
import img7 from '/home/shreyarai0308/react4/src/Assets/img7.jpg'
import img8 from '/home/shreyarai0308/react4/src/Assets/img8.jpg'
import img9 from '/home/shreyarai0308/react4/src/Assets/img9.jpg'

import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
{
  id:1,
  imgsrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},

{
  id: 2,
  imgsrc: img2,
  destTitle: 'Europe',
  location: 'Multiple Countries',
  grade: 'DIVERSE CULTURES',
  fees: '$2000',
  description: 'Europe, a continent of diverse cultures and landscapes, offers an unforgettable journey through history and modernity. Explore the romantic streets of Paris, marvel at the ancient ruins in Rome.'

},

{id: 3,
  imgsrc: img3,
  destTitle: 'Maldives',
  location: 'Maldives',
  grade: 'TROPICAL PARADISE',
  fees: '$1200',
  description: 'The Maldives, a tropical paradise in the Indian Ocean, is renowned for its pristine white-sand beaches, crystal-clear waters, and overwater bungalows. Dive into the vibrant underwater world and indulge in luxury resorts.'
},

{
  id: 4,
  imgsrc: img4,
  destTitle: 'New York City',
  location: 'New York, USA',
  grade: 'URBAN ADVENTURE',
  fees: '$1000',
  description: 'New York City, the city that never sleeps, is a vibrant urban destination in the United States. Experience the iconic landmarks like Times Square, Central Park, and the Empire State Building.'
},

{
  id: 5,
  imgsrc: img5,
  destTitle: 'London',
  location: 'United Kingdom',
  grade: 'CULTURAL METROPOLIS',
  fees: '$800',
  description: 'London, the capital of the United Kingdom, is a cultural metropolis steeped in history. Visit world-famous landmarks such as the Big Ben, Buckingham Palace, and the British Museum.'

},

{
  id: 6,
  imgsrc: img6,
  destTitle: 'Barcelona',
  location: 'Spain',
  grade: 'HISTORICAL CULTURE',
  fees: '$750',
  description: 'Barcelona is a vibrant city in Spain, known for its unique architecture and rich history. Explore the works of Gaudi, stroll along the lively streets, and savor delicious tapas.'
},

{
  id: 7,
  imgsrc: img7,
  destTitle: 'Maui',
  location: 'Hawaii',
  grade: 'BEACH RELAX',
  fees: '$1000',
  description: 'Maui, the Hawaiian paradise, offers stunning beaches, lush landscapes, and adventurous water activities. Immerse yourself in the Aloha spirit and experience the magic of the islands.'
},

{
  id: 8,
  imgsrc: img8,
  destTitle: 'Jaipur',
  location: 'India',
  grade: 'CULTURAL HERITAGE',
  fees: '$600',
  description: 'Jaipur, also known as the "Pink City," is a vibrant cultural hub in India. Explore majestic palaces, visit historic forts like Amber Fort, and immerse yourself in the rich heritage of Jaipur.'
},

{
  id: 9,
  imgsrc: img9,
  destTitle: 'Statue of Liberty',
  location: 'New York, USA',
  grade: 'HISTORICAL LANDMARK',
  fees: '$25',
  description: 'The Statue of Liberty, a symbol of freedom and democracy, stands tall on Liberty Island in New York Harbor. Visit this iconic historical landmark, learn about its fascinating history.'
},

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className= 'main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
      {
        Data.map(({id,imgsrc,destTitle, location, grade,fees, description})=>
        {
          return(
            <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt='img'/>
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span>{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main;