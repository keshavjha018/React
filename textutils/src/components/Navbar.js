import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
                  // using props inside className i.e value passed via mode props will apply
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.text}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jokes">Jokes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pics">Pics</Link>
            </li>
          </ul>
                                                              {/* if mode=light => text color=dark, else light */}
          <div class={`form-check form-switch container text-${props.mode === 'light'?'dark':'light'} mx-3`}>
            <input onClick={props.ChangeMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.BtnText}</label>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

//prop types (basically its like a data type for fun args)
Navbar.prototypes = {title: PropTypes.string
                    }