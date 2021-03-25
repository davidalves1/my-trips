module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.spec.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
