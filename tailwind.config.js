/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '560':'35rem',
      }
    },
    fontFamily : {
        "jua" : ["Jua-Regular"],
        "appleB" : ["AppleSDGothicNeoB"],
        "appleM" : ["AppleSDGothicNeoM"],
        "appleL" : ["AppleSDGothicNeoL"],
      },
  },
  plugins: [],
}

