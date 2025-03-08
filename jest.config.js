// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for simulating a browser-like environment
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transpile TypeScript files
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Optional: Add extra jest-dom matchers for better assertions
};
