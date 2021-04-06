import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';


class Header extends React.Component {

  constructor() {
    super();
    this.scrollto.bind(this);
    this.select.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.navbarlinksActive);
    this.onscroll(document, this.navbarlinksActive);

    this.on('click', '.mobile-nav-toggle', function(e) {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    })

    this.on('click', '.scrollto', function(e) {
      if (document.querySelector(this.hash)) {
        e.preventDefault()
  
        let body = document.querySelector('body')
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active')
          let navbarToggle = document.querySelector('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        let elementPos = document.querySelector(this.hash).offsetTop
        window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
        })
      }
    }, true)
  }

  select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  on = (type, el, listener, all = false) => {
    let selectEl = this.select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  scrollto(el) {
    let elementPos = document.querySelector(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
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
      <div>
        <i class="bi bi-list mobile-nav-toggle d-xl-none" style={{ color: "rgb(114, 131, 148)" }}></i>
        <header id="header" className="header d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu navbar-expand-sm">
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
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;