import React from "react";

const Footer = () => {

  const instagram = "instagram.com/webskyseo"
  const linkdin = "https://www.linkedin.com/in/websky-seo-56a917257"
  const twitter = "https://twitter.com/webskyseo?t=kWkVJf-zWxV5kJ7Njaw4yg&s=09"
  const facebook = "https://www.facebook.com/people/webskyseo/100089105651042/?mibextid=ZbWKwL"
  const email = "webskyseo07@gmail.com"
  const mobileNumber = "+918058080082"


  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  WebSkySeo<span>.</span>
                </h3>
                <p>
                  Hiran Mangri Sector 3 <br />
                  Udaipur , Rajasthan
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> {mobileNumber}
                  <br />
                  <strong>Email:</strong>{email}
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#hero">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Social Media Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Seo</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                Connect with us from following social media platforms.
                </p>
                <div className="social-links mt-3">
                  <a href={twitter} className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href={facebook} className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href={instagram} className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href={linkdin} className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>WebSkySeo</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
