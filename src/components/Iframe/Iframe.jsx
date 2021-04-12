import React from "react";
import "./iframe.css";

export const Iframe = ({ id }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

/**width="560"
        height="315" */
