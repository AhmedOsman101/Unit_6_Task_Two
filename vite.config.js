import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	base: "/Unit_6_Task_Two",
	plugins: [react()],
});
