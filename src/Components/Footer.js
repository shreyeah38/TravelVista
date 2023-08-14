import React,{useEffect} from 'react'
import './CSSFiles/footer.css'
import video2 from '/home/shreyarai0308/react4/src/Assets/back.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {FaGlobeAmericas} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Footer=()=>
{
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return(
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder= 'Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type= 'submit'>SEND <FiSend className="icon"/>
            </button> I
        </div>

        </div>
        <div className="footerCard flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
              <FaGlobeAmericas className='icon'/>
              Travel.
            </a>
          </div>
          <div data-aos="fade-up" className="footerPara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, blanditiis obcaecati doloremque accusamus perferendis aperiam ab qui similique provident, quae sequi cupiditate, maiores ex ad?
          </div>
          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
          <div className ="footerLinks grid">
              {/* Group One */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  Agency
                </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Services
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Tourism
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Insurance
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Agency
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Payment
                </li>
              </div>

              {/* Group Two */}
              <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
                <span className="groupTitle">
                  Partner
                </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Booking
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Rental Car
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Hotel
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Trivago
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>TripAdvisor
                </li>
              </div>

              {/* Group Three */}
              <div data-aos="fade-up" 
              data-aos-duration="5000"  className="linkGroup">
                <span className="groupTitle">
                  Last Minute
                </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>London
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>California
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Europe
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>Indonesia
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>India
                </li>
              </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME </small>
            <small>COPYRIGHTS RESERVED - TRIPADVISOR 2023</small>
          </div>

        </div>
    </div>
    </section>
  )
}
export default Footer
