import React from 'react';
import './styles/NavBar.css';
import PropTypes from 'prop-types';

export default function Navbar(props) {

    // for Toast, Dark/Light mode button
    const toastTrigger = document.getElementById('ModeBtn');
    const toastLiveExample = document.getElementById('liveToastForMode');
    if (toastTrigger) {
        // eslint-disable-next-line no-undef
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }

    return (
      <>
        <nav className={`navbar bg-${props.mode} fixed-to`}>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">{props.title}</a> 
            {/* dark or light mode button */}
            <button className='btn btn-primary dark-mode-btn' id='ModeBtn' onClick={props.toggleMode}><i className="fa-solid fa-circle-half-stroke"></i></button>
            <button className="navbar-toggler toggle-btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`offcanvas offcanvas-end text-dark bg-${props.mode}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title fs-3 text-light" id="offcanvasNavbarLabel">{props.title}</h5>
                <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body text-white">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active fw-bold text-white fs-4" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white fs-4" aria-current="page" href="#">Service</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link text-white fs-4' aria-current='page' href="#" >About</a>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-primary" type="submit">Search</button>
                </form>
                <div className="form-check form-switch mt-4">
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'info' ? 'Light': 'Dark'}`}</label>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Toast message for Dark/Light button*/}
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToastForMode" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
              <strong className="me-auto">TextUtils</strong>
              <small>1 second ago</small>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>Mode changed.</div>
          </div>
        </div>
      </>
    );
}

// PropTypes
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// default values 
Navbar.defaultProps = {
    title: "TextUtils"
}