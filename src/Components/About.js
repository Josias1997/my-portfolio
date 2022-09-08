import React from "react";

const About = ({ data }) => {
  if (data) {
    let name = data.name;
    let profilepic = "images/" + data.image;
    let bio = data.bio;
    let street = data.address.street;
    let city = data.address.city;
    let state = data.address.state;
    let zip = data.address.zip;
    let phone = data.phone;
    let email = data.email;
    let resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Josias's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>{data?.labels.aboutMe}</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>{data?.labels.contactDetails}</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={"files/" + resumeDownload} target="_blank" className="button">
                  <i className="fa fa-download"></i>{data?.labels.downloadResume}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
