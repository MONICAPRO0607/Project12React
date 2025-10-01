import React from "react";
import "./ProgressBar.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <span className="progress-label">{progress}%</span>
    </div>
  );
}

export default ProgressBar;