import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	assetsInclude: ["**/*.pdf", "**/*.xlsx"],
	server: {
		port: 3000,
		host: true,
		open: true,
	},
	preview: {
		port: 3000,
		host: true,
	},
});


