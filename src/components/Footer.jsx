import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer
				className="shadow-xl shadow-white p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full font-semibold"
				id="Footer">
				<Link to="/">
					<span className="text-gray-600 dark:text-gray-200 text-center block hover:text-blue-400">
						Berimbolo Security
					</span>
				</Link>
				<span className="text-gray-600 dark:text-gray-400 text-sm">
					&copy; Copyright {new Date().getFullYear()}. All Rights
					Reserved.
				</span>
				{/* <div className="grid place-items-center gap-4">
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
