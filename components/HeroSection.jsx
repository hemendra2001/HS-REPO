import React from "react";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            Hello, I'm <span>Mamta prajaapt</span>
          </h1>
          <h2>
            I work with most innovative solution in the market to help you to
            get the desired result.
          </h2>
          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">
                  <a href="">WHY CHOICE ME ?</a>
                </h4>
                <p className="description">
                  We are the best <b>SEO</b> services provider. Having More than{" "}
                  <b>4+</b> years of experience. We provide <b>24/7</b> Customer
                  Support. We <b>Grow</b> your Website Traffic, Online Leads And
                  Sales and provide you the best service on your <b>Price</b>. Feel free to Contact us.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">
                  <a href="">HOW WE WORK ?</a>
                </h4>
                <li className="description">Website Analytics</li>
                <li className="description">In-depth Keyword Research</li>
                <li className="description">Keyword Tracking</li>
                <li className="description">Keyword Targeting</li>
                <li className="description">Content Relevancy</li>
                <li className="description">Link Building</li>
                <li className="description">Weekly Work Progress Reports</li>                         
                <li className="description">Monthly Website Reviews</li>
              </div>  
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">MY SERVICE INCLUDES</a>
                </h4>
                <li className="description">ON PAGE OPTIMIZATION</li>
                <li className="description">OFF PAGE OPTIMIZATION</li>
                <li className="description">TECHNICAL OPTIMIZATION</li>
                <li className="description">TECHNICAL AUDIT</li>
                <li className="description">MONTHLY UPDATES</li>
                <li className="description">COMPETITIVE ANALYSIS</li>
                <li className="description">TRUSTED PARTNER</li>
                <li className="description">REPORTING DASHBOARD</li>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">
                  <a href="">QUALITY WORK</a>
                </h4>
                <p className="description">
                  We follow the guidelines given to us by <b>Google</b>. Quality
                  work so you will never be penalized by the Search Engine
                  Algorithms. Our <b>Experienced</b> digital marketing team
                  knows how to build a business, tickle difficult situations,
                  and successfully ran a business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
