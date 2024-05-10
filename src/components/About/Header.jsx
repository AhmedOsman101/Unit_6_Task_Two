import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<section className="bg-gray-900 text-gray-100 mt-[3.5rem] px-9">
				<div className="container flex flex-col mx-auto lg:flex-row">
					<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 justify-center">
						<h2 className="text-5xl font-semibold leading-none">
							Berimbolo Security
						</h2>
						<p className="mt-4 mb-8 text-lg">
							Modern solutions to all your security problems....
						</p>
						<Link
							to="/"
							className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-600 text-gray-50">
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
