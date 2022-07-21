import React from "react";
import wave from "../img/Emoji.png";
import Me from "../img/Me.jpg";

const Content = () => {
  return (
    <div className="content">
      <main>
        <div>
          <h1>
            Hi <img src={wave} alt="wave" width={40} />
          </h1>
          <h1>I'm Moamin</h1>
          <h1>Full Stack Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            pariatur itaque ab accusamus, voluptates illo?
          </p>
        </div>
        <div className="buttons">
          <button className="cta hire">Hire me</button>
          <button className="cta project">See my projects</button>
        </div>
        <div></div>
      </main>
      <figure>
        <img src={Me} alt="moamin" className="me-img" width={350} />
        <div className="img-bg"></div>
      </figure>
    </div>
  );
};

export default Content;
