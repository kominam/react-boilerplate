module.exports = {
  automock: false,
  browser: false,
  bail: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  rootDir: '../../',
  roots: ['<rootDir>/src/'],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    __DEV__: true
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/config/tests/enzyme.setup.js']
};
