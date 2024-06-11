import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom', //this is optional, only when you are testing DOM related functionalities
    },
})