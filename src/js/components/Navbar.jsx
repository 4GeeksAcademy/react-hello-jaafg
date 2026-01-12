import react from "react";
const Navbar = () => {
    const linksMenu = [
		{ name: "Home", },
		{ name: "About" },
		{ name: "Services" },
		{ name: "Contact" }
	];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<a href="" className="navbar-brand">Start Bootstrap</a>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ms-auto">
						{linksMenu.map((link, index) => (
							<li className="nav-item" key={index}><a href="" className="nav-link" key={index}>{link.name}</a></li>
						))}
					</ul>
				</div>
			</nav>
    );
}
export default Navbar;