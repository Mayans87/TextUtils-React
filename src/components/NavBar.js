import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";

export default function NavBar(props) {
 
  
 return (
 
<nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href ="#">{props.title}</a>
    {/* <Link className="navbar-brand" to ="/">{props.title}</Link> */}
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          {/* <Link className="nav-link active" aria-current="page" to="/"  >Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#"  >Home</a>
        </li>
        {/* <li className="nav-item text-white" >
          {/* <Link className="nav-link" to="/about">{props.About}</Link> */}
          {/* <a className="nav-link" href="#">{props.About}</a>
        </li> */} 
      </ul>
      <form className="d-flex" role="search" />
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-info" type="submit">Search</button>
        <div className="form-check form-switch">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
</div>
  </div>
  </div>
  
  </nav>
    )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired, 
    About: PropTypes.string.isRequired,
       //specifies datatype of value used and isrequired makes it a must, i.e.,cant be blank.
}  
NavBar.defaultProps ={
  title: 'set title here',    //default text in case of no value passed.
  About: 'here about',

}