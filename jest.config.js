/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch:['**/test/**/*.test.ts'],
  collectCoverage:true,
  moduleNameMapper:{
    '^@/(.*)': '<rootDir>/src/$1',
  },
};