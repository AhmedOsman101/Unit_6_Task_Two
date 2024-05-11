import { useState } from "react";

/* eslint-disable react/prop-types */
const Question = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<>
			<div
				className="w-full border rounded-lg cursor-pointer"
				onClick={handleClick}>
				<div className="Question px-4 py-6 focus:outline-none focus-visible:ring-cyan-600 focus-visible:dark:ring-cyan-400">
					<svg
						width="16"
						height="16"
						fill="white"
						className={
							isOpen
								? "inline-block mr-2 rotate-90"
								: "inline-block mr-2"
						}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512">
						<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
					</svg>
					{data.question}
				</div>
				<div
					className={`grid overflow-hidden ${
						isOpen
							? "grid-rows-[1fr] opacity-100"
							: "opacity-0"
					}`}>
					{data.answers.map((answer, index) => {
						return (
							<div
								className={
									isOpen
										? "pl-6 pr-2 pt-2 pb-4 -mt-4 text-gray-600 dark:text-gray-400 overflow-hidden"
										: "h-0 opacity-0 overflow-hidden pb-0"
								}
								key={index}>
								• {answer}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Question;
