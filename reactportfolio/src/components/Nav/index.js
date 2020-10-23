import React from "react";
function Nav() {
  return (
    <nav  id="navBar" className="navbar navbar-expand-lg navbar bg">
			<a className="navbar-brand" href="#"></a>
			<ul class="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="index.html">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="about.html">
						About
					</a>
				</li>
				<li className="nav-item">
					<a class="nav-link" href="portfolio.html">
						Portfolio
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="contact.html">
						Contact
					</a>
				</li>
			</ul>
		</nav>
  );
}

export default Nav;