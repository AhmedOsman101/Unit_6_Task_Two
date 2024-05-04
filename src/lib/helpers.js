import Data from "./db.js";

export const fetchData = (key) => {
	return Data[key];
};
