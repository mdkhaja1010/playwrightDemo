pipeline {
  agent any

  environment {
    CI = 'true'
    ENV = 'qa'
  }

  stages {
    stage('Clean previous run artifacts') {
      steps {
        sh 'rm -rf allure-results allure-report playwright-report test-results'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps chromium'
      }
    }

    stage('Run QA regression tests') {
      steps {
        sh 'npm run regresionTest:qa'
      }
    }
  }

  post {
    always {
      script {
        try {
          if (fileExists('allure-results') && fileExists('node_modules/.bin/allure')) {
            sh './node_modules/.bin/allure generate allure-results --clean --output allure-report'
          } else {
            echo 'Allure results or the local Allure CLI are unavailable; skipping report generation.'
          }
        } finally {
          archiveArtifacts(
            artifacts: 'allure-results/**,allure-report/**,playwright-report/**,test-results/**',
            allowEmptyArchive: true
          )
        }
      }
    }
  }
}
