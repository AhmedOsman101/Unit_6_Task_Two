/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ link, handleClick = () => {} }) => {
	return (
		<>
			<li className="flex font-semibold">
				<NavLink
					rel="noopener noreferrer"
					to={link.path}
					onClick={handleClick}
					className="navLink">
					{link.label}
				</NavLink>
			</li>
		</>
	);
};

export default CustomNavLink;
