module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@marvel/(.*)": "<rootDir>/src/$1"
  },
};