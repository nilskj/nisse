const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			typography: {
				excerpt: {
					css: {
						p: theme => ({
							fontFamily: `${theme('fontFamily.display')}`,
							letterSpacing: theme('letterSpacing.tight'),
							fontSize: theme('fontSize.2xl'),
							lineHeight: theme('lineHeight.8'),
						})
					}
				},
			},
		},
	},

  plugins: [ require('@tailwindcss/typography')],
};

module.exports = config;