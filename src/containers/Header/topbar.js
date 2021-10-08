/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            {/* <!-- Top Left --> */}
            <div className="top-left">
              <ul className="list-main">
                <li>
                  <i className="ti-headphone-alt" />
                  {' '}
                  +060 (800) 801-582
                </li>
                <li>
                  <i className="ti-email" />
                  {' '}
                  support@shophub.com
                </li>
              </ul>
            </div>
            {/* <!--/ End Top Left --> */}
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            {/* <!-- Top Right --> */}
            <div className="right-content">
              <ul className="list-main">
                <li>
                  <i className="ti-location-pin" />
                  {' '}
                  Store location
                </li>
                <li>
                  <i className="ti-alarm-clock" />
                  {' '}
                  <a href="#">Daily deal</a>
                </li>
                <li>
                  <i className="ti-user" />
                  {' '}
                  <a href="#">My account</a>
                </li>
                <li>
                  <i className="ti-power-off" />
                  <a href="login.html#">Login</a>
                </li>
              </ul>
            </div>
            {/* <!-- End Top Right --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
