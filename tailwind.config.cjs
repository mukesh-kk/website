const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.svelte",
    "./src/**/*.md",
    "./src/contents/*.ts",
    "./svelte.config.js",
    "./src/lib/utils/remark-embed-video.js",
    "./src/lib/utils/remark-link-with-image-as-only-child.js",
  ],
  // we have to safelist these because there are dynamically added to the dom via JS and for prod tailwind ships the classes via analyzing the markup without doing so these won't make there way to prod unless used somewhere on the markup.
  safelist: ["overflow-y-hidden", "mr-4"],
  darkMode: "class",
  theme: {
    extend: {
      listStyleType: {
        alpha: "upper-alpha",
        roman: "upper-roman",
      },
      screens: {
        xs: "425px",
        lgx: "1140px",
        "1/2xl": "1442px",
      },
      backgroundImage: {
        "gitpod-kumquat-gradient":
          "linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      colors: {
        important: "var(--important)",
        body: "var(--body)",
        sub: "var(--sub)",
        "link-grey": "var(--link-grey)",
        divider: "var(--divider)",
        "divider-light": "var(--divider-light)",
        bg: "var(--bg)",
        card: "var(--card)",
        nav: "var(--nav)",

        "less-important": "var(--less-important)",

        "sand-dark": "var(--sand-dark)",
        "sand-dark-hover": "var(--sand-dark-hover)",
        "sand-light": "var(--sand-light)",
        white: "var(--white)",

        primary: "var(--brand-almost-ripe)",
        secondary: "var(--brand-ripe)",
        tertiary: "var(--brand-light)",
        quaternary: "var(--brand-quaternary)",

        "black-hover": "var(--black-hover)",
        error: "var(--error)",

        salmon: "var(--salmon)",
        "salmon-hover": "var(--salmon-hover)",

        black: "var(--black)",
        "off-black": "var(--off-black)",
        "light-black": "var(--light-black)",
        "light-black-hover": "var(--light-black-hover)",
        "light-grey": "var(--light-grey)",
        "dark-grey": "var(--dark-grey)",
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
        "p-large": "var(--p-large)",
        "p-medium": "var(--p-medium)",
        "p-small": "var(--p-small)",
        "p-xsmall": "var(--p-xsmall)",
        "p-footer": "var(--p-footer)",
        "btn-small": "var(--btn-small)",
        "fine-print": "var(--fine-print)",
      },
      lineHeight: {
        "x-small": "var(--x-small)",
      },
      maxWidth: {
        row: "var(--row-max-width)",
        "container-normal": "var(--container-normal)",
      },
      spacing: {
        huge: "var(--huge)",
        "x-huge": "var(--x-huge)",
        "xxx-large": "var(--xxx-large)",
        "xx-large": "var(--xx-large)",
        "x-large": "var(--x-large)",
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        "x-small": "var(--x-small)",
        "xx-small": "var(--xx-small)",
        micro: "var(--micro)",
        macro: "var(--macro)",
      },
      boxShadow: {
        normal: "var(--shadow)",
        light: "var(--shadow-light)",
        light1: "var(--shadow-light-1)",
        slight: "var(--shadow-slight)",
        medium: "var(--shadow-medium)",
        brand: "var(--shadow-brand)",
        highlight: "var(--shadow-highlight)",
      },
      zIndex: {
        "-10": "-10",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "var(--link-grey)",
            },
            "h1, h2, h3, h4, h5": {
              color: "var(--important) !important",
            },
            "p, ul, ol, div, strong, figcaption": {
              color: "var(--body)",
            },
            blockquote: {
              fontStyle: "normal",
              margin: "2rem 0",
              padding: "1.5rem",
              borderLeftWidth: "0",
              borderRadius: "0.75rem",
              background: "var(--brand-light)",
              a: {
                color: "var(--link-grey)",
              },
              "a:hover": {
                color: "var(--black)",
              },
              "a:focus": {
                color: "var(--black)",
              },
              code: {
                background: "var(--brand-almost-ripe)",
              },
              ul: {
                color: "var(--dark-grey)",
              },
              p: {
                color: "var(--dark-grey)",
                strong: {
                  color: "var(--dark-grey)",
                },
                margin: "0",
                "&::after": {
                  content: "none !important",
                },
                "&::before": {
                  content: "none !important",
                },
              },
            },
            code: {
              color: "var(--dark-grey)",
              fontWeight: "100",
              fontSize: "1em",
              "&::after": {
                content: "none !important",
              },
              "&::before": {
                content: "none !important",
              },
              a: {
                color: "var(--link-grey)",
              },
              "a:hover": {
                color: "var(--black)",
              },
            },
            h1: {
              marginBottom: "var(--xx-small)",
              fontSize: "var(--h4)",
              fontWeight: "700",
            },
            h2: {
              marginTop: "var(--x-large)",
              fontSize: "var(--p-large)",
              fontWeight: "700",
              code: {
                fontWeight: "700 !important",
              },
            },
            h3: {
              marginTop: "var(--medium)",
              fontSize: "var(--h6)",
              fontWeight: "700",
              code: {
                fontWeight: "700 !important",
              },
              em: {
                fontStyle: "normal",
              },
            },
            h4: {
              marginTop: "var(--small)",
              fontSize: "var(--p-medium)",
            },
            iframe: {
              maxWidth: "100%",
              marginTop: "var(--micro)",
            },
            img: {
              margin: "0",
            },
            li: {
              fontSize: "var(--p-medium)",
              marginBottom: "0", // overwrite _forms.scss
              "&::marker": {
                color: "var(--brand-ripe) !important",
              },
              p: {
                margin: "0",
              },
              ul: {
                marginLeft: "var(--x-small)",
              },
              strong: {
                color: "var(--important)",
              },
            },
            ol: {
              listStylePosition: "inside",
              listStyleType: "decimal",
              margin: "var(--micro) 0",
              paddingLeft: "0",
              li: {
                p: {
                  display: "inline",
                },
                paddingLeft: "0",
              },
            },
            p: {
              fontSize: "var(--p-medium)",
              strong: {
                color: "var(--body)",
              },
            },
            pre: {
              display: "block",
              overflow: "none",
              margin: "var(--micro) 0",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.75rem",
              background: "var(--sand-dark)",
            },
            strong: {
              code: {
                fontWeight: "bolder !important",
              },
            },
            table: {
              width: "100%",
              margin: "var(--micro) 0",
              overflow: "hidden",
              borderRadius: "1rem",
              fontSize: "var(--p-small)",
              "@media (min-width: 768px)": {
                minWidth: "31.25rem",
              },
              strong: {
                color: "var(--important)",
              },
            },
            tbody: {
              background: "var(--card)",
            },
            tr: {
              "border-color": "var(--divider)",
            },
            td: {
              lineHeight: "150%",
              marginTop: "0.75rem",
              marginRight: "1.5rem",
              marginBottom: "0.75rem",
              marginLeft: "1.5rem",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
              verticalAlign: "top",
              "&:first-child": {
                code: {
                  color: "var(--dark-grey)",
                  fontWeight: "700",
                },
              },
            },
            th: {
              fontWeight: "400",
              marginTop: "0.75rem",
              marginRight: "1.5rem",
              marginBottom: "0.75rem",
              marginLeft: "1.5rem",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
              color: "var(--important)",
            },
            ul: {
              listStyle: "none",
              margin: "var(--micro) 0",
              paddingLeft: "var(--xx-small)",
              "@media (min-width: 768px)": {
                paddingLeft: "var(--x-small)",
              },
              "> li": {
                marginBottom: "0",
                position: "relative",
                "&::before": {
                  content: "'—'",
                  position: "absolute",
                  left: "calc(var(--xx-small) * -1)",
                  color: "var(--brand-ripe)",
                  "@media (min-width: 768px)": {
                    left: "calc(var(--x-small) * -1)",
                  },
                },
              },
            },
          },
        },
      },
    },
    minHeight: {
      13: "3.375rem",
      ...defaultTheme.minHeight,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
