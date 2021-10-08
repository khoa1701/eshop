import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-12">
						{/* <!-- Top Left --> */}
						<div className="top-left">
							<ul className="list-main">
								<li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
								<li><i className="ti-email"></i> support@shophub.com</li>
							</ul>
						</div>
						{/* <!--/ End Top Left --> */}
					</div>
					<div className="col-lg-8 col-md-12 col-12">
						{/* <!-- Top Right --> */}
						<div className="right-content">
							<ul className="list-main">
								<li><i className="ti-location-pin"></i> Store location</li>
								<li><i className="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
								<li><i className="ti-user"></i> <a href="#">My account</a></li>
								<li><i className="ti-power-off"></i><a href="login.html#">Login</a></li>
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
