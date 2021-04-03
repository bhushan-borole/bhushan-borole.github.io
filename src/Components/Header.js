import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';


class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('load', this.navbarlinksActive)
    this.onscroll(document, this.navbarlinksActive)
  }

  onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  navbarlinksActive = () => {
    let navbarlinks = document.querySelectorAll('#navbar .scrollto')
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = document.querySelector(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }

  render() {
    return (
      <header id="header" className="header d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu navbar-expand-sm">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: "fff" }}></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active d-flex justify-content-center">
                <i class="bx bx-home"></i> 
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about"  className="nav-link scrollto d-flex justify-content-center">
                <i class="bx bx-user"></i> 
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience" class="nav-link scrollto d-flex justify-content-center">
                <i class="bx bx-briefcase"></i>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" class="nav-link scrollto d-flex justify-content-center">
                <i className="bx bx-code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#achievements" class="nav-link scrollto d-flex justify-content-center">
                <i class="bx bx-award"></i> 
                <span>Achievements</span>
              </a>
            </li>
            <li>
              <a href="#education" class="nav-link scrollto d-flex justify-content-center">
                <SchoolIcon />
                <span>Education</span>
              </a>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;