module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Nunito Sans', 'sans-serif']

    },
    colors: {
      DarkBlue : 'hsl(209, 23%, 22%)', //(Dark Mode Elements)
      VeryDarkBlue: 'hsl(207, 26%, 17%)', //(Dark Mode Background)
      LightVeryDarkBlue: 'hsl(200, 15%, 8%)', //(Light Mode Text)
      DarkGray: 'hsl(0, 0%, 52%)', //(Light Mode Input)
      VeryLightGray: 'hsl(0, 0%, 98%)', //(Light Mode Background)
      White: 'hsl(0, 0%, 100%)' //(Dark Mode Text & Light Mode Elements)
    }
  },
  plugins: [],
  
}
