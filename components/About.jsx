import React from "react";

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <h3>
            Find Out More <span>About Us</span>
          </h3>
          <p className="font-change">
            First Rank in the SEO services provider to boost your
            search engine ranking, attract web traffic, get more leads and enjoy
            higher conversions!.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>
            Our SEO experts help businesses of all sizes and industries grow their online presence, drive revenue and strike a strong competitive edge. You will get to hire SEO experts from us at a fraction of the cost and time for your unique SEO needs.
            </h3>
            <p className="fst-italic">
              We have experience across many different industries, delivering
              results in all of them. Our past clients include services such as
              car finance dealerships to prestigious art galleries and
              everything in between. Take a look at our case studies for more of
              the companies we have worked with.
            </p>
            <ul>
              <li>
                <i className="bx bx-store-alt"></i>
                <div>
                  <h5>
                  Ask For Free Consultation
                  </h5>
                  <p>
                  The procedure of employing the SEO marketing expert from us begins with the execution of communication and asking for your entails using various means such as Skype, Email, Phone call or more.
                  </p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>Planning & Discussion On Project Entails and Details</h5>
                  <p>
                  Our professional SEO consultants will communicate and gather thorough information on project details and requirements and further will share insights about how your business entails will be met.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
