import React from 'react'

const Header = () => {

  const instagram = "instagram.com/webskyseo"
  const linkdin = "https://www.linkedin.com/in/websky-seo-56a917257"
  const twitter = "https://twitter.com/webskyseo?t=kWkVJf-zWxV5kJ7Njaw4yg&s=09"
  const facebook = "https://www.facebook.com/profile.php?id=100088228801242&mibextid=ZbWKwL"
  const email = "webskyseo07@gmail.com"
  const mobileNumber = 8058080082


  return (
    <>
 <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="/">{email}</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>{mobileNumber}</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href={twitter} className="twitter"><i className="bi bi-twitter"/></a>
        <a href={facebook} className="facebook"><i className="bi bi-facebook"/></a>
        <a href={instagram} className="instagram"><i className="bi bi-instagram"/></a>
        <a href={linkdin} className="linkedin"><i className="bi bi-linkedin"/></a>
      </div>
    </div>
  </section>

  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="index.html">SEO EXPERT<span>.</span></a></h1>
       <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  </header> 
    </>
  )
}

export default Header