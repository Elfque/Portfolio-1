const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="abouts">
        <div>
          <img src="Port/pics/web.jpg" alt="" className="about_pic" />
          <div className="pro">
            <div className="title">Frontend Developer</div>
            <p>
              I am a frontend developer with passion for building responsive
              websites for an optimal user experience that achieves your
              business goals.
            </p>
          </div>
        </div>
        <div>
          <img src="Port/pics/teach.jpg" alt="" className="about_pic" />
          <div className="pro">
            <div className="title">Instructor</div>
            <p>
              I love to teach. So aside building beautiful apps, I have passion
              for passing down knowledge I have acquired over the years to other
              people. one year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
