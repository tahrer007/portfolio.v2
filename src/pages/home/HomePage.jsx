import React, { useRef, useEffect } from "react";
import "./home.scss";
import ResumeBtn from "../../components/resumeBtn/ResumeBtn";
import { init } from "ityped";

const HomePage = () => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();

  useEffect(() => {
    init(text1Ref.current, {
      showCursor: false,
      //backDelay: 3000,
      typeSpeed: 100,
      disableBackTyping: true,

      strings: ["Hi, I'm"],
    });

    init(text2Ref.current, {
      showCursor: false,
      typeSpeed: 100,
      startDelay: 1500,
      //backDelay: 3000,
      disableBackTyping: true,

      strings: ["Tahrer Abu Diab"],
    });
    init(text3Ref.current, {
      showCursor: false,
      typeSpeed: 100,
      startDelay: 3000,
      strings: ["Full-Stack Developer"],
      disableBackTyping: true,
    });
  }, []);

  return (
    <section id="home" className="homePage">
      <div className="left">
        <p className="p1">
          {" "}
          <span ref={text1Ref}></span>
        </p>
        <p className="p2">
          {" "}
          <span ref={text2Ref}></span>
        </p>
        <p className="p3">
          <span ref={text3Ref}></span>
        </p>
        <ResumeBtn />
      </div>
      <div className="right"></div>
    </section>
  );
};

export default HomePage;
