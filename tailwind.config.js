/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pt-root-ui": ['"PT Root UI", sans-serif'],
        BebasNeue: ['"BebasNeue", sans-serif'],
        BebasNeueCyrillic: ["BebasNeueCyrillic, sans-serif"],
        rubik: ["Rubik, sans-serif"],
      },
      fontSize: {
        heading: ["40px", { fontWeight: 700 }],
        base: ["30px", { fontWeight: 700 }],
        "timer-digits": ["60px", { fontWeight: 400, lineHeight: 1 }],
        "timer-letters": ["16px", { fontWeight: 700 }],
        "card-title": ["30px", { fontWeight: 400, lineHeight: 1 }],
        "card-title-horizontal": ["38px", { fontWeight: 400, lineHeight: 1 }],
        "card-discount": [
          "50px",
          { fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" },
        ],
        "card-discount-horizontal": [
          "50px",
          { fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.04em" },
        ],
        "card-no-discount": ["24px", { fontWeight: 500, lineHeight: 1 }],
        "card-description": ["16px", { fontWeight: 500, lineHeight: 1.3 }],
        text: ["18px", { fontWeight: 500, lineHeight: 1.3 }],
        "checkbox-text": ["16px", { fontWeight: 400, lineHeight: 1.1 }],
        button: ["20px", { fontWeight: 500, lineHeight: 1 }],
        warning: ["14px", { fontWeight: 400, lineHeight: 1.34 }],
        star: ["18px", { fontWeight: 500, lineHeight: 1.3 }],
        "modal-title": ['30px', {fontWeight: 700, lineHeight: 1.3}],
        "modal-text": ['24px', {fontWeight: 500, lineHeight: 1.3}]
      },
      colors: {
        background: "#f5f7f7",
        "accent": "#01b9c5",
        "timer-digits": "var(--timer-color, #01B9C5)",
        "timer-30-digits": "FD4D35",
        "timer-letters": "#818798",
        "card-title": "#687078",
        "card-title-horizontal": "#2d3242",
        "card-discount": "#2d3242",
        "card-no-discount": "#95979f",
        "card-description": "#2f4353",
        checkbox: "#01b9c5",
        "checkbox-text": "#818798",
        "checkbox-link": "#2d97f9",
        button: "#fff",
        "button-background": "#fd4d35",
        warning: "#818798",
        star: "#fff",
        dots: "var(--timer-color, #01B9C5)",
        "modal-bg": "#f5f7f7",
        "modal-title": "#12191d"
      },
      padding: {
        header: "6px 69px 14px 0",
        card: "43px 29px 26px",
        "card-horizontal": "26px 0 21px 28px",
        "card-title": "32px",
        "card-discount": "6px",
        button: "28px 99px",
        modal: "61px 40px 40px",
        "modal-discount": '12px 28px 16px 30px'
      },
      margin: {
        img: "44px",
        "card-title": "25px",
        "card-title-horizontal": "10px 20px 0 0",
        "card-price": "21px",
        "card-price-horizontal": "59px",
        "card-description-horizontal": "11px",
        "checkbox-container": "26px",
        button: "50px",
        warning: "30px",
      },
      inset: {
        timer: "calc(100% - 6px) 0",
        "dots-x": "calc(50% - 1px)",
        "dots-y-before": "16px",
        "dots-y-after": "26px",
      },
      borderRadius: {
        card: "20px",
        checkbox: "4.8px",
        button: "60px",
        dots: "100px",
        "modal-discount": "30px"
      },
      borderWidth: {
        card: "2px",
        "modal-discount": "1.5px"
      },
      borderColor: {
        card: "#01b9c5",
      },
    },
  },
  plugins: [],
};
