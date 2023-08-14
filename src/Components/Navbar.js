import React,{useState} from 'react'
import {FaGlobeAmericas} from 'react-icons/fa'
import {TbGridDots} from 'react-icons/tb'
import {AiFillCloseCircle} from 'react-icons/ai'
import './CSSFiles/navbar.css'

export default function Navbar() {

  const [active, setActive] = useState('navBar')
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar=()=>{
    setActive('navBar')
  }


  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="." className="logo flex">
            <h1><FaGlobeAmericas className="icon"/> TravelVista</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Package</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href="/">Book Now</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}
