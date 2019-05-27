module.exports = {
    "rootDir": ".",
    "modulePaths": [
        "<rootDir>"
    ],
    "moduleNameMapper": {
        "~(.*)$": "<rootDir>/$1"
    },
    "testEnvironment": "node",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json",
        "node"
    ],
    "transform": {
        ".(ts|tsx)": "ts-jest"
    },
    "testMatch": [
        "**/__tests__/*.(ts|tsx)"
    ],
    "testResultsProcessor": "./node_modules/jest-junit-reporter",
    "collectCoverageFrom": [
        "<rootDir>/**/*.{ts,tsx,js}"
    ],
    "coverageDirectory": "./coverage",
    "coverageReporters": [
        "json",
        "lcov",
        "text",
        "cobertura"
    ]
}