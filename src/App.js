import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-modal";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const App = () => {
  const [language, setLanguage] = useState("en");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    if (language === "fr") {
      fetch("/resumeData.fr.json")
        .then((res) => res.json())
        .then((data) => {
          setResumeData(data);
        });
    } else if (language === "en") {
      fetch("/resumeData.json")
        .then((res) => res.json())
        .then((data) => {
          setResumeData(data);
        });
    }
  }, [language]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const validate = () => {
    localStorage.setItem("language", selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div className="App">
      {resumeData ? (
        <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  enable: true,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1.4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
          <Header
            data={resumeData.main}
            onChangeLanguage={changeLanguage}
            language={language}
          />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      ) : null}
    </div>
  );
};

export default App;
