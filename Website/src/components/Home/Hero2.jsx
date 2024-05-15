const Hero = () => {
	return (
		<>
			<section className="bg-gray-800 text-gray-100">
				<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
					<h1 className="text-4xl font-bold leading-none sm:text-5xl">
						With&nbsp;
						<span className="text-blue-400">Berimbolo&nbsp;</span>
						at your side, Experience true security
					</h1>
					<h1 className="text-4xl font-bold leading-none sm:text-5xl"></h1>
					<p className="px-8 mt-8 mb-12 text-lg">
						Built To Make You Secure
					</p>
					<div className="flex flex-wrap justify-center">
						<button className="px-8 py-3 m-2 text-lg font-semibold rounded text-gray-900 bg-blue-400">
							Get started
						</button>
						<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">
							Learn more
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
