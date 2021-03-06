import React from "react";

import "./Header.scss";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__grid">
          <div className="header__promo">10% off online bookings! Use the code FOXFIT</div>
          <nav className="header__nav">
            <div className="header__row">
              <div className="header__col">
                <div className="header__col__naming">
                  <div className="header__col__naming__logo">
                    <svg preserveAspectRatio="xMidYMid meet" id="comp-jy5rl0m1svgcontent" data-bbox="22.383 22.383 154.617 154.617" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="22.383 22.383 154.617 154.617" data-type="color" role="img">
                      <g>
                        <path fill="#eeff43" d="M100.591 105.046l.965-.37v-.319a9.439 9.439 0 0 0-.965.689z" data-color="1"></path>
                        <path
                          fill="#eeff43"
                          d="M173.625 77.061l-72.069 27.615v21.913l-60.678 23.25c-.128-.15-.26-.295-.386-.446C54.672 166.268 75.925 177 99.692 177c41.362 0 75.137-32.483 77.207-73.331.067-1.318.101-2.644.101-3.978a77.226 77.226 0 0 0-3.375-22.63z"
                          data-color="1"
                        ></path>
                        <path fill="#eeff43" d="M169.251 65.922l-.003.001c.014.03.031.058.045.088l-.042-.089z" data-color="1"></path>
                        <path fill="#eeff43" d="M34.322 140.973c.284.449.579.89.872 1.332-.292-.441-.574-.89-.857-1.338l-.015.006z" data-color="1"></path>
                        <path fill="#bee1e6" d="M30.132 133.461l.003-.001c-.012-.026-.026-.05-.039-.076l.036.077z" data-color="2"></path>
                        <path
                          fill="#bee1e6"
                          d="M100.591 105.046a9.6 9.6 0 0 1 .965-.689V82.762l60.687-23.254c.104-.042.206-.087.311-.129.832-.333 1.668-.656 2.508-.969-13.701-21.65-37.855-36.027-65.371-36.027-42.696 0-77.308 34.612-77.308 77.309 0 11.839 2.669 23.052 7.426 33.082-.081-.171-.154-.345-.234-.517l71.016-27.211z"
                          data-color="2"
                        ></path>
                        <path
                          fill="#112042"
                          d="M101.556 104.357v.319l72.069-27.615h.001a76.623 76.623 0 0 0-1.217-3.656c-.087-.24-.177-.478-.266-.716a76.652 76.652 0 0 0-1.162-2.946c-.073-.173-.151-.343-.224-.515a75.332 75.332 0 0 0-1.199-2.652c-.089-.187-.174-.377-.264-.563-.014-.03-.031-.058-.045-.088a77.39 77.39 0 0 0-4.192-7.493l-2.812 1.078-60.687 23.254v21.593z"
                          data-color="3"
                        ></path>
                        <path
                          fill="#112042"
                          d="M101.556 126.589v-21.913l-.965.37-71.015 27.211c.08.171.153.346.234.517.096.203.188.408.286.61.012.026.026.05.039.076a77.055 77.055 0 0 0 4.202 7.508c.283.448.565.896.857 1.338.24.362.48.723.725 1.08a76.02 76.02 0 0 0 2.19 3.03 77.918 77.918 0 0 0 1.69 2.151c.228.279.461.552.692.827.127.151.259.296.386.446l60.679-23.251z"
                          data-color="3"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="header__col__naming__title">Emily Fox Fitness</div>
                </div>
              </div>
              <div className="header__col">
                <div className="header__burger">
                  <span></span>
                </div>
                <div className="header__menu ">
                  <div className="header__menu__items">
                    <ul>
                      <li className="header__menu__item">
                        <a href="../main/index.html"> Home</a>
                      </li>
                      <li className="header__menu__item">
                        <a href="../meet/index.html">Meet Emily</a>
                      </li>
                      <li className="header__menu__item">
                        <a href="../about/index.html">FoxFit</a>
                      </li>
                      <li className="header__menu__item">
                        <a href="../price/index.html">Plans & Pricing</a>
                      </li>
                      <li className="header__menu__item">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__menu__log-in">
                    <a href="#">
                      <div className="header__menu__log-in__icon">
                        <svg preserveAspectRatio="xMidYMid meet" id="comp-jzjxmkacsvgcontent" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" role="img">
                          <g>
                            <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="header__menu__log-in__title"> Log In</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
