import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 fixed bottom-0 left-0  w-full ">
				<div className="grid place-items-center gap-4 font-semibold">
					<Link to="/">
						<span className="text-gray-600 dark:text-gray-200 text-center block hover:text-blue-400">
							Berimbolo Security
						</span>
					</Link>
					<span className="text-gray-600 dark:text-gray-400 text-sm">
						© Copyright 2024. All Rights Reserved.
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
