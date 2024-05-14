import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
	useEffect(() => {
		document.title = "Berimbolo Security | Error 404";
	}, []);

	return (
		<>
			<section
				id="Error"
				className="grid place-items-center h-full dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800 overflow-hidden">
				<div className="grid place-items-center px-5 mx-auto my-8">
					<div className="max-w-md text-center grid place-items-center">
						<h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
							<span className="sr-only">Error</span>404
						</h2>
						<p className="text-2xl font-semibold md:text-3xl">
							Sorry, we could not find this page.
						</p>
						<p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">
							But dont worry, you can find plenty of other things
							to do on our homepage.
						</p>
						<Link
							rel="noopener noreferrer"
							to="/"
							className="px-8 py-3 font-semibold rounded bg-blue-400 dark:bg-blue-600 text-gray-900 dark:text-gray-50">
							Back to homepage
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Error404;
