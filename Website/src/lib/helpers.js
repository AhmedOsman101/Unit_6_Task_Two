import Data from "./db.js";

export const fetchData = (key) => {
	return Data[key];
};

export const animationDurationCalculator = (baseTime, index, step) => {
	return baseTime + index * step;
};
