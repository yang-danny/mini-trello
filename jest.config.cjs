
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: ['\\.spec\\.(js|ts)$'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/'],
};