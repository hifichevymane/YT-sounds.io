import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient mb-4 text-white
                    shadow px-5">
      <div className="container-fluid py-2">
        <a className="navbar-brand text-light fw-bolder" href="#">YT-sounds.io</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light fw-medium active" aria-current="page" href="#">Download video</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-medium" href="#">Download audio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light fw-medium' href="#">Policy privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
