import React, { useState } from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data, language, onChangeLanguage }) => {
  const [activeLink, setActiveLink] = useState("#home");
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
            data?.links.map(({ label, href }) => (
              <li key={href} className={href === activeLink ? "current" : ""} onClick={() => setActiveLink(href)}>
                <a className="smoothscroll" href={href}>
                  {label}
                </a>
              </li>
            ))
          }
          <li className={language === "fr" ? "current" : ""} onClick={() => onChangeLanguage("fr")}>
            <a className="smoothscroll" href="#">
              FR
            </a>
          </li>
          <li className={language === "en" ? "current" : ""} onClick={() => onChangeLanguage("en")}>
            <a className="smoothscroll" href="#">
              EN
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `${data?.labels.Iam} ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            {data?.labels.basedIn} {city}. <span>{occupation}</span>. {description}.
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
