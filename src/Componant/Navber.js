import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navber(props) {
    return (

        <nav className={`navbar navbar-expand-lg navber-${props.mode} bg-${props.mode} text-${props.color}`}>
            <div className="container-fluid " >
                <a className={`navbar-brand text-${props.color}`} href="/">{props.tittle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        {/* <li className="nav-item">
                            <a className={`nav-link active text-${props.color}`} aria-current="page" href="/"  >{props.Home}</a>
                        </li> */}

                        <li className="nav-item">
                          <Link className={`nav-link active text-${props.color}`} aria-current="page" to="/"  >{props.Home}</Link>
                      </li>
                      {/* <li className="nav-item">
                          <Link className={`nav-link text-${props.color}`} to="/textform" >TextForm</Link>
                      </li> */}
                      <li className="nav-item">
                          <Link className={`nav-link text-${props.color}`} to="./about" >About</Link>
                      </li>


                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')} }style={{width:'30px',height:'30px',cursor:'pointer'}} ></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')} }style={{width:'30px',height:'30px',cursor:'pointer'}} ></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')} }style={{width:'30px',height:'30px',cursor:'pointer'}} ></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')} }style={{width:'30px',height:'30px',cursor:'pointer'}} ></div>
                    </div>
                    {/* <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={() => { props.toggleMode(null) }} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navber.propTypes = {
    tittle: PropTypes.string.isRequired,
    Home: PropTypes.string
}
Navber.defaultProps = {
    tittle: "Portfolio",
    Home: "Home"
}
