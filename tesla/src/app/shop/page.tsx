"use client";
import React, { useEffect } from "react";
import "@/styles.css";

const ParallaxComponent: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(
        ".section.one"
      ) as HTMLElement;
      const secondSection = document.querySelector(
        ".section.reveal"
      ) as HTMLElement;
      const scrollPosition = window.scrollY;

      if (scrollPosition > firstSection.offsetHeight - window.innerHeight) {
        secondSection.style.opacity = "1";
        secondSection.style.transform = "translateY(0)";
      } else {
        secondSection.style.opacity = "0";
        secondSection.style.transform = "translateY(100%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="section one">
        <h1>First Section</h1>
      </div>
      <div className="section reveal">
        <h1>Second Section Revealed</h1>
      </div>
    </div>
  );
};

export default ParallaxComponent;
