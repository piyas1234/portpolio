import React, { useContext, useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'
import { PresentPath, UserContext } from '../../App'
import NavProfile from './NavProfile'
import img from '../images/idea (1).png'
import DarkMode from './DarkMode'
const Navbody = () => {
  const [inputData, setinputData] = useContext(UserContext)
  const [cPath, setcPath] = useContext(PresentPath)
  const [navBg, setnavBg] = useState({ zIndex: '100' })
  const { displayName, email } = inputData
  const path = useLocation()
  const [color, setcolor] = useState('white')

  const navStyle = {
    backgroundColor: 'rgb(255, 101, 191)',
    color: 'white',
    boxShadow: `0px 0px 10px 0px ${color}`,
    borderColor: 'transparent',
    border: '1px solid',
    fontWeight: 'bold',
    margin: '10px',
    padding: '10px',
    borderRadius: '50px'
  }

  const navStyle2 = {
    color: color,
    boxShadow: `0px 0px 10px 0px ${color}`,
    borderColor: 'transparent',
    border: '1px solid',
    fontWeight: 'bold',
    margin: '10px',
    padding: '10px',
    borderRadius: '50px'
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }

    const scrollFunction = () => {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        setnavBg({
          backgroundColor: '#510097',
          position: 'fixed',
          zIndex: '100',
          width: '100%',
          transition: '1.2s',
          paddingBottom: '20px',
          zIndex: '100'
        })
        setcolor('white')
      } else {
        setnavBg({ zIndex: '100' })
      }
    }
    setcPath(path.pathname)
  }, [path])

  return (
    <div>
      <Navbar style={navBg} expand="lg">
        <Navbar.Brand>
          {' '}
          <Link style={navStyle} to="/">
            <img width="50px" src={img} alt="" srcset="" />
            PiyasTalukder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div>
              <DarkMode></DarkMode>
            </div>

            <Link style={navStyle2} to="/">
              Home
            </Link>

            <Link style={navStyle2} to="/projects">
              Projects
            </Link>

            <Link style={navStyle2} to="/blog">
              Blog
            </Link>
            <Link style={navStyle2} to="/mycv">
              myCv
            </Link>

            <Link style={navStyle2} to="/contact">
              Contact
            </Link>
            {/* <Link style={navStyle2} to="/deshboard">
              Dashboard
            </Link> */}
            {!displayName && !email ? (
              <Link style={navStyle} to="/login">
                Login
              </Link>
            ) : (
              ''
            )}
            <Link style={{ marginTop: '10px' }}>
              <NavProfile value={inputData}></NavProfile>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navbody
