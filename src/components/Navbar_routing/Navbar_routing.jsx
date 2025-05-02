import React from 'react'
import "./Navbar_routing.css"
import {Link} from "react-router-dom"

const Navbar_routing = () => {
  return (
    <div className="navbar">
            <div className="left_nav">
                <h1>REACT</h1>
            </div>
            <div className="right_nav">
                <Link id="link" to="/home"><li>HOME</li></Link>
                <Link id="link" to="/about"><li>ABOUT US</li></Link>
                <Link id="link" to="/products"><li>PRODUCTS</li></Link>
                <Link id="link" to="/receipe"><li>RECEIPE</li></Link>

                <li>
                    {/* <IoMdSearch /> */}
                </li>
            </div>
            <div className="menu">
                {/* <MdMenu /> */}
            </div>
        </div>
  )
}

export default Navbar_routing