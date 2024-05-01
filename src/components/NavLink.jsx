/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ link }) => {
	const location = useLocation();
	const [active, setActive] = useState("navLink");

	useEffect(() => {
		const isActive = location.pathname == link.path;
		setActive(isActive ? "navActive" : "navLink");
	}, [link.path, location.pathname]);

	return (
		<>
			<li className="flex font-semibold">
				<Link
					rel="noopener noreferrer"
					to={link.path}
					className={active}>
					{link.label}
				</Link>
			</li>
		</>
	);
};

export default NavLink;
