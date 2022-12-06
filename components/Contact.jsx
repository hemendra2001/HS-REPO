import React, { useEffect, useState } from "react";

const initialState = {
  name:"",
  subject:"",
  message:"",
  email:""
}

const Contact = () => {
  const [data,setData] = useState(initialState)
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(false)
  const [loader,setLoader] = useState(false)


  const email = "webskyseo07@gmail.com"
  const mobileNumber = 8058080082



  useEffect(()=>{
    if(loader || success || error){
      setTimeout(()=>{
        setLoader(false)
        setSuccess(false)
        setError(false)
      },3000)
    }

  },[success,error])

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSave = async(e) =>{
    e.preventDefault()
    setLoader(true)
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        const { error } = await res.json()
        if (error) {
          setError(true)
          setLoader(false)
           setData(initialState)
          return
        }
        setLoader(false)
        setSuccess(true)
           setData(initialState)
        
      } catch (error) {
        setError(true)
        setLoader(false)
           setData(initialState)
        
       console.log(error,'email error')
    }
  }


  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <h3>
            <span>Contact Us</span>
          </h3>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>Hiran Mangri Sector 3 Udaipur , Rajasthan</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>{email}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+91{mobileNumber}</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 ">
            <img src="./img/contact.jpg" width={'100%'} height={'380px'} alt="contactus" />
          </div>

          <div className="col-lg-6">
            <form
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={data.name}
                    required
                  />
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={data.subject}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={data.message}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {
                  loader &&  <div className="loading">Loading</div>
                }
               {
                 error && <div className="error-message"> Oops Something went wrong</div>
               }
                {
                  success &&  <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                }
               
              </div>
              <div className="text-center">
                <button type="submit" onClick={handleSave}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
