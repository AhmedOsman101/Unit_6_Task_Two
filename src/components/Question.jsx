/* eslint-disable react/prop-types */
const Question = ({ data }) => {
	return (
		<>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600 focus-visible:dark:ring-cyan-400">
					{data.question}
				</summary>
				{data.answers.map((answer, index) => {
					return (
						<p
							className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 dark:text-gray-400"
							key={index}>
							• {answer}
						</p>
					);
				})}
			</details>
		</>
	);
};

export default Question;
