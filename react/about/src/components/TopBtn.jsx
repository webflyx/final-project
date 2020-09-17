import React from "react";

import "./TopBtn.scss";

export class TopBtn extends React.Component {
  render() {
    return (
      <div className="top-btn" id="top">
        <a href="#start">
          {" "}
          <svg preserveAspectRatio="xMidYMid meet" id="BACK_TO_TOP_BUTTONsvgcontent" data-bbox="20 20 160 160" xmlns="http://www.w3.org/2000/svg" viewBox="20 20 160 160" height="200" width="200" data-type="color" role="img">
            <g fillRule="evenodd">
              <path fillRule="nonzero" fill="#efff4b" d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" data-color="1"></path>
              <path fill="#253c57" d="M63.412 114L60 109.649 100.034 78 140 109.652 136.584 114l-36.55-28.3L63.412 114z" data-color="2"></path>
              <path fillRule="nonzero" fill="#253c57" d="M100 24c-41.974 0-76 34.026-76 76s34.026 76 76 76 76-34.026 76-76-34.026-76-76-76zm0-4c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80z" data-color="3"></path>
            </g>
          </svg>
        </a>
      </div>
    );
  }
}
