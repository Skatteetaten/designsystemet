import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  setupFilesAfterEnv: ['./jest-setup.js'],
};
