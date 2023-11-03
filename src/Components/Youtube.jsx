import React from "react";

const Youtube = ({ data }) => {
  return (
    <section id="youtube">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{data?.labels.title}</h1>

          <div id="portfolio-wrapper" className="twelve columns">
            {data?.videos.map(({ videoId }) => (
              <div className="six columns" key={videoId}>
                <iframe
                  style={{ width: "100%", height: "300px" }}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
