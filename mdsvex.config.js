import path from "path";
import { fileURLToPath } from "url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");
const config = {
	extensions: [".svelte.md", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [],
	rehypePlugins: [],

	layout: {
		mds: path.join(dirname, "./src/routes/labs/labs.svelte")
	}
};

export default config;
