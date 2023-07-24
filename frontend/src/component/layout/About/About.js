import React from "react";
import "./aboutSection.css";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h2 component="h1">About Us</h2>

        <div>
          <div>
            <image
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://nitinkondhari03.github.io/static/media/img.575ea9057312eafe203c.png"
              alt="Founder"
            />
            <h2>Nitin Kondhari</h2>
            <button onClick={visitInstagram} color="primary">
              Visit Instagram
            </button>
            <span>
              This is a sample wesbite made by @nitinkondhari. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2 component="h2">Our Brands</h2>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              {/* <YouTubeIcon className="youtubeSvgIcon" /> */}
            </a>

            <a href="https://instagram.com/kondharinitin" target="blank">
              {/* <InstagramIcon className="instagramSvgIcon" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
