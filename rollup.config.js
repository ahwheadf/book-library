import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: "src/app.js",
	output: {
		dir: "dist",
		format: "iife"
	},
	/* css() Optional: filename to write all styles to output: 'bundle.css' */
	plugins: [css({ output: "bundle.css", }), nodeResolve()]
}