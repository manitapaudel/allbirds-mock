module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    backgroundImage: (theme) => ({
      "hero-guy":
        "url('https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/heroSlide/en-US/images/4FAPq2tREPwjxhL2KRRLB4/1')",
      "hero-himNher":
        "url('https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/heroSlide/en-US/images/1d6fjAytfxv5yNhgqmocf3/1')",
      "hero-summer":
        "url('https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')",
      "hero-winter":
        "url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
