import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		experimentalStudio: true,
	},
});

// viewportHeight: 1000,
// viewportWidth: 450,
