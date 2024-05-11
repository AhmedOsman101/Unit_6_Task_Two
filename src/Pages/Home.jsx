import Hero from "../components/Home/Hero";
import Plans from "../components/Home/Plans";
import FAQs from "../components/Home/FAQs";

const Home = () => {
	return (
		<>
			<div className="grid place-items-center">
				<Hero />
				<Plans />
				<FAQs />
			</div>
		</>
	);
};

export default Home;
