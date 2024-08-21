import { getJestProjectsAsync } from '@nx/jest';

export default {
  projects: getJestProjectsAsync(),
  setupFilesAfterEnv: ['./jest-setup.js'],
};
