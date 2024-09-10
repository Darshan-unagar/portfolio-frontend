import React,{useState} from 'react'

function Index() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
  
    try {
        
  
      const response = await fetch('https://backend-hr4j.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) {
       
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          // Fallback if response isn't valid JSON
          console.error('Error parsing JSON:', jsonError);
          errorData = { error: 'Unknown error occurred' };
        }
        console.error('Response error:', errorData);
        throw new Error(`Network response was not ok: ${errorData.error || 'Unknown error'}`);
      }  
      const result = await response.json();
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Submit error:', error);
      setStatus(`Error: ${error.message}`);
    }
  };
  
  
  return (
   <div>
  {/* about section */}
  <section className="section pt-0" id="about">
    {/* container */}
    <div className="container text-center">
      {/* about wrapper */}
      <div className="about">
        <div className="about-img-holder">
          <img src="./assets/imgs/man.png" className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
        </div>
        <div className="about-caption">
          <p className="section-subtitle">Who Am I ?</p>
          <h2 className="section-title mb-3">About Me</h2>
          <p>
           My love for creativity and tech, coupled with my wish to solve real-world problems using web development is one of the main reasons I decided to chase a career in Web Developer &Web Designer. I have a degree of Bachelor in Computer Application from Veer Narmad South Gujarat University, aswell I can work on both front-end and back-end technologies such as HTML5, CSS3, JavaScript, php, jquery, c++, sql, node.js, Python, ASP. NET and AngularJS. My work on projects, from e-commerce platforms to library and inventory management systems are a mirror of my desire to build useful things that look great. My process centers around merging pragmatic design with a spark of creativity and communicating experience. My aim is to work on exciting projects that blend beauty with utility and which keep pace with the changing world.
          </p>
          <a href="./assets/cv/Fullstack Developer - Darshan-Unagar.pdf" download="Darshan Unagar.pdf">
          <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
          </a>
        </div>
      </div>{/* end of about wrapper */}
    </div>{/* end of container */}
  </section> {/* end of about section */}
  {/* service section */}
  <section className="section" id="service">
    <div className="container text-center">
      <p className="section-subtitle">What I Do ?</p>
      <h6 className="section-title mb-6">Service</h6>
      {/* row */}
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="./assets/imgs/pencil-case.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Website Design and Development</h6>
              <p className="subtitle">Web designing with a smooth functioning  and seamless integration.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="./assets/imgs/responsive.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Web Applications</h6>
              <p className="subtitle">Building scalable, high-performance web apps to fit modern business needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="./assets/imgs/toolbox.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Responsive and Mobile Design</h6>
              <p className="subtitle">Creating responsive, mobile-first designs for a seamless user experience.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="./assets/imgs/analytics.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Consultation and Strategy</h6>
              <p className="subtitle">Offering expert guidance and strategy for successful web projects.</p>
            </div>
          </div>
        </div>
      </div>{/* end of row */}
    </div>
  </section>{/* end of service section */}
  {/* portfolio section */}
  <section className="section" id="portfolio">
    <div className="container text-center">
      <p className="section-subtitle">What I Did ?</p>
      <h6 className="section-title mb-6">Portfolio</h6>
      {/* row */}
      <div className="row">
        <div className="col-md-4">
          <a href="https://hpglobaltech.vercel.app/" className="portfolio-card" target="_blank">
            <img src="./assets/imgs/folio-1.jpg" className="portfolio-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>Web Designing</h4>
                <p className="font-weight-normal">HP Global Tech</p>
              </span>
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="#" className="portfolio-card" target="_blank">
            <img className="portfolio-card-img" src="./assets/imgs/folio-2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>Web Designing</h4>
                <p className="font-weight-normal">Web Templates</p>
              </span>
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="#" className="portfolio-card" target="_blank">
            <img className="portfolio-card-img" src="./assets/imgs/folio-3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>Web Designing</h4>
                <p className="font-weight-normal">Web Templates</p>
              </span>
            </span>
          </a>
        </div>
      </div>{/* end of row */}
    </div>{/* end of container */}
  </section> {/* end of portfolio section */}
  {/* section */}
  <section className="section-sm bg-primary">
    {/* container */}
    <div className="container text-center text-sm-left">
      {/* row */}
      <div className="row align-items-center">
        <div className="col-sm offset-md-1 mb-4 mb-md-0">
          <h6 className="title text-light">Want to work with me?</h6>
          <p className="m-0 text-light">Always feel Free to Contact &amp; Hire me</p>
        </div>
        <div className="col-sm offset-sm-2 offset-md-3">
          <button className="btn btn-lg my-font btn-light rounded"><a href="#contact">Hire Me</a></button>
        </div>
      </div> {/* end of row */}
    </div> {/* end of container */}
  </section> {/* end of section */}
  {/* testimonial section */}
  <section className="section" id="testmonial">
    <div className="container text-center">
      <p className="section-subtitle">What Think Client About Me ?</p>
      <h6 className="section-title mb-6">Testmonial</h6>
      {/* row */}
      <div className="row">
        <div className="col-md-6">
          <div className="testimonial-card">
            <div className="testimonial-card-img-holder">
              <img src="./assets/imgs/avatar2.jpg" className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="testimonial-card-body">
              <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                adipisci nihil.</p>
              <h6 className="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="testimonial-card">
            <div className="testimonial-card-img-holder">
              <img src="./assets/imgs/avatar3.jpg" className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="testimonial-card-body">
              <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                adipisci nihil.</p>
              <h6 className="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
      </div>
    </div> {/* end of container */}
  </section> {/* end of testimonial section */}
  {/* contact section */}
  <section className="section" id="contact">
    <div className="container text-center">
      <p className="section-subtitle">How can you communicate?</p>
      <h6 className="section-title mb-5">Contact Me</h6>
      {/* contact form */}
      <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size={50}
                className="form-control"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comment"
                id="comment"
                rows={6}
                className="form-control"
                placeholder="Write Something"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
        {status && <div className="status-message">{status}</div>}
      </div>
    </section>
</div>

  )
}

export default Index
