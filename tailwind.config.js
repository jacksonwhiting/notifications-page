/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				blue: "#0A327B",
				red: "#F65552",
				veryDarkGreyBlue: "#1C202B",
				darkGreyBlue: "#5E6778",
				greyBlue: "#939CAD",
				lightGreyBlue: "#E5EFFA",
				veryLightGreyBlue: "#DDE7EE",
				snow: "#F7FAFD",
			},
			fontFamily: {
				fontPri: ["Plus Jakarta Sans", "sans-serif"],
			},
			fontSize: {
				header: "1.5rem",
				bodyM: "1rem",
				bodyS: ".875rem",
			},
		},
	},
	plugins: [],
}
