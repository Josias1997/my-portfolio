import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Header = ({ data, language, onChangeLanguage }) => {
  const [activeLink, setActiveLink] = useState(0);

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          {data?.labels.showNavigation}
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          {data?.labels.hideNavigation}
        </a>

        <ul id="nav" className="nav">
          {
            data?.links.map(({ label, href }, index) => (
              <li key={href}>
                <a className="smoothscroll" href={href}>
                  {label}
                </a>
              </li>
            ))
          }
          <li className={language === "en" ? "current" : ""} onClick={() => onChangeLanguage("en")}>
            <a className="smoothscroll" href="#">
              EN
            </a>
          </li>
          <li className={language === "fr" ? "current" : ""} onClick={() => onChangeLanguage("fr")}>
            <a className="smoothscroll" href="#">
              FR
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <Typewriter
                options={{
                  strings: [data?.labels.Iam, name],
                  autoStart: true,
                  loop: true
                }}
            />
          </h1>
          <h3>
            <span>{occupation}</span>.
          </h3>
          <h3>
            <span>{description}</span>.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
