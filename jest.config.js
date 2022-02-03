module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/",],
    // setupFilesAfterEnv: ["/src/test/setupTest.ts",],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: "jsdom"
}