import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/">
			ShowMe
		</Link>
		<button
			className="navbar-toggler collapsed"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="#navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="navbar-collapse collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<NavLink className="nav-link" to="/movies">
						TV Shows <span className="sr-only">(current)</span>
					</NavLink>
				</li>

				{!user && (
					<>
						<li className="nav-item">
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/register">
								Register
							</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li className="nav-item">
							<NavLink className="nav-link" to="/profile">
								{user.name}
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/logout">
								Logout
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	</nav>
);

export default NavBar;
