import React from 'react'
import '../stylesheet/navbar.scss'
import logo from '../../public/htmlLogo.png'

const Navbar = ({showData}) => {
  return (
    <div className='navbar'>

        <a href="/">
          <div className="navbarLogo">
              <img src={logo} alt="logo" />
          </div>
        </a>

        <div className=' navbarContent'>
            <h2 className=' navbarHeading'>Zadanie <span>rekrutacyjne</span></h2>
            <h2 className={showData}> Jakub Kontek</h2>
        </div>
    </div>
  )
}

export default Navbar