#!/usr/bin/env groovy
def jenkinsfile


def publishToNpmOverride = { Map<String, Object> props  ->
  if (props.publishToNpm) {
    if (props.nodeVersion == '16') {
      echo 'The registry is specified as a workaround for https://github.com/npm/cli/issues/2453'
      sh "npx nx affected --base=${props.scmVars.GIT_PREVIOUS_SUCCESSFUL_COMMIT ?: 'HEAD~1'} --target=publish --switches='--registry https://nexus.sits.no/repository/npm-internal/'"
    } else {
      sh "npx nx affected --base=${props.scmVarsenv.GIT_PREVIOUS_SUCCESSFUL_COMMIT ?: 'HEAD~1'} --target=publish --switches=''"
    }
  }
}


def publishSnapshotToNpmOverride = { Map<String, Object> props  ->
  if (props.publishSnapshotToNpm) {
    if (props.nodeVersion == '16') {
      echo 'The registry is specified as a workaround for https://github.com/npm/cli/issues/2453'
      sh "npx nx affected --base origin/master --target=publish --switches='--tag ${props.branchVersion} --registry https://nexus.sits.no/repository/npm-internal/'"
    } else {
      sh "npx nx affected --base origin/master --target=publish --switches='--tag ${props.branchVersion}'"
    }
  }
}

def preCompile = { Map<String, Object> props  ->
  sh "echo preCallback"
  if (!props.isReleaseBuild && props.publishSnapshotToNpm) {
    sh "npx nx affected --base origin/master --target=set-version --packageVersion=${props.npmSnapshotVersion}"
  }
}


def overrides = [
    scriptVersion                : 'v7',
    pipelineScript               : 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    iqCredentialsId              : 'designsystem-iq',
    iqOrganizationName           : 'Team Designsystem',
    sonarQube                    : true,
    npmInstallCommand            : "ci",
    nodeVersion                  : "16",
    disableAllReports            : false,
    lineCoverageReport           : false,
    publishToNpm                 : true,
    publishToNpmOverride         : publishToNpmOverride,
    publishSnapshotToNpm         : true,
    publishSnapshotToNpmOverride : publishSnapshotToNpmOverride,
    preCompile                   : preCompile,
    npmPublishFolder    : './dist/libs',
    versionStrategy     : [[branch: 'master', versionHint: '0']]
]



fileLoader.withGit('https://git.aurora.skead.no/scm/auf/designsystemet.git', "FRONT-837_webleveranse_template", "aurora-bitbucket") {
  jenkinsfile = fileLoader.load('jenkins/template.groovy')
}

jenkinsfile.run(overrides.scriptVersion, overrides)
