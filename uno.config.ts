import {
  defineConfig,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUno()],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      accent: "var(--accent-color)",
      secondary: "var(--secondary-color)",
      whiteish: "var(--white-color)",
    },
    animation: {
      keyframes: {
        wiggle:
          "{0%,100% {transform:rotate(-5deg)} 50% {transform:rotate(5deg)}}",
      },
      durations: {
        wiggle: "400ms",
      },
      timingFns: {
        wiggle: "ease-in-out",
      },
      properties: {
        wiggle: {
          "transform-origin": "center bottom",
        },
      },
      counts: {
        wiggle: "infinite",
      },
    },
  },
});
