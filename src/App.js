import React, { useEffect, useState } from "react";
import Modal from "react-modal";

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
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

const App = () => {
  const [language, setLanguage] = useState('en');
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

  const validate = () => {
    localStorage.setItem("language", selectedLanguage);
    setLanguage(selectedLanguage);
  }

  const handleChange = event => {
    setSelectedLanguage(event.target.value);
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div className="App">
    {
      resumeData ? (
        <>
          <Header data={resumeData.main} onChangeLanguage={changeLanguage} language={language} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      ) : null
    }
    </div>
  );
};

export default App;
