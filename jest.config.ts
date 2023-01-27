import type { Config } from "jest";

export default {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "<rootDir>/src/__tests__/tsconfig.json" },
    ],
  },
} as Config;
