const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'apollo-blue': '#02475b',
        'apollo-light-blue': '#00b3e3',
        'apollo-orange': '#ff9f5b',
        'apollo-green': '#13a873',
        'apollo-gray': '#f8f8f8',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
