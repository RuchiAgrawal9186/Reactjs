import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Cocktail Website</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="*" >Help</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header