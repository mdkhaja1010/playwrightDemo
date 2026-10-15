pipeline {
  agent any

  environment {
    CI = 'true'
    ENV = 'qa'
  }

  stages {
    stage('Clean previous run artifacts') {
      steps {
        bat 'if exist allure-results rmdir /s /q allure-results'
        bat 'if exist allure-report rmdir /s /q allure-report'
        bat 'if exist playwright-report rmdir /s /q playwright-report'
        bat 'if exist test-results rmdir /s /q test-results'
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install chromium'
      }
    }

    stage('Run QA regression tests') {
      steps {
        bat 'npm run regresionTest:qa'
      }
    }
  }

  post {
    always {
      script {
        try {
          if (fileExists('allure-results') && fileExists('node_modules/.bin/allure.cmd')) {
            bat 'node_modules\\.bin\\allure.cmd generate allure-results --clean --output allure-report'
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
