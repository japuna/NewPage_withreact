module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#4f195e",
      secondary: "#0c709d",
      white: "#FFFFFF",
    },
    extend: {
      strokeWidth: {
        4: "4px",
      },
      boxShadow: {
        WhiteShadow: "2px 5px 12px 10px rgba(255, 255, 190, 0.3)",
        SecondaryShadow: "2px 5px 12px 10px rgba(12, 112, 157, 0.1);",
      },
    },
  },
  plugins: [],
};
