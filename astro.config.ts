// @ts-check
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import react from "@astrojs/react";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
	integrations: [UnoCSS(), react()],
	experimental: {
		svg: true,
	},
	adapter: deno(),
});
