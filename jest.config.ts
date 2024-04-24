import type {Config} from '@jest/types';
import {pathsToModuleNameMapper} from "ts-jest";
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
export default config;