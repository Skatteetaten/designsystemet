import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  setupFilesAfterEnv: ['./jest-setup.js'],
};
