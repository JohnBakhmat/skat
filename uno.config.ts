import { defineConfig, transformerDirectives, presetUno, transformerCompileClass, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
    transformerDirectives()
  ]
})
