const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Join us</a>
						</li>
					</ul>
				</div>
				<a className="btn normal-case text-xl">2point5</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Join us</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn btn-primary">Discord</a>
			</div>
		</div>
	);
};
export default Navbar;
