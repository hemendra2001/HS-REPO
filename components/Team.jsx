import React from "react";

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <h3>
            Our Hardworking <span>Team</span>
          </h3>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/img/team/team-1.jpg"
                  className="img-fluid-new"
                  alt=""
                />
          
              </div>
              <div className="member-info">
                <h4>kamlesh prajaapt</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member">
              <div className="member-img">
                <img src="/img/team/team-2.jpeg" className="img-fluid-new" alt="" />
              </div>
              <div className="member-info">
                <h4>Bharat Singh Rajawat</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/img/team/team-3.jpg"
                  className="img-fluid-new"
                  alt=""
                />
          
              </div>
              <div className="member-info">
                <h4>Hemendra Singh Rao</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/img/team/team-4.jpg"
                  className="img-fluid-new"
                  alt=""
                />
          
              </div>
              <div className="member-info">
                <h4>Heena Kunwar Rao</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
