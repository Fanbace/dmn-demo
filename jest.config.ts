// jest.config.ts
import type {Config} from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  process.env.TZ = 'CET'

  return {

    collectCoverage: false,
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest', {
          tsconfig: './test/tsconfig.test.json',
          // Set to false to get ts reporting (severely impacts performance)
          isolatedModules: true,
        }
      ]
    },
    bail: 1,
    testEnvironment: "node",
    preset: "ts-jest",
    transformIgnorePatterns: [
    ],
    "moduleNameMapper": {
      "#repo/(.*)": "<rootDir>/src/infra/repository/$1",
      "#infra/(.*)": "<rootDir>/src/infra/$1",
      "#domain/(.*)": "<rootDir>/src/domain/$1",
      "#types/(.*)": "<rootDir>/types/$1",
      // "#util/(.*)": "<rootDir>/src/util/$1"
    }
  };
};
