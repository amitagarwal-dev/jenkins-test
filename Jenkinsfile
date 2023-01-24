pipeline {
    agent any
    stages {
         stage('Nodejs Version') {
            steps {
                 nodejs(nodeJSInstallationName: 'node14') {
                   echo "nodejs version"
                    sh 'node -v'
                }
                
            }
        }
        stage('Dependency management') {
            steps {
                 nodejs(nodeJSInstallationName: 'node14') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'node14') {
                    sh 'npm test'
                }
                
            }
        }

        // stage('Lint') {
        //     steps {
        //         sh 'npm run lint'
        //     }
        // }
        stage('Sonar Report') {
            steps {
                withSonarQubeEnv('sonarserver') {            
                 nodejs(nodeJSInstallationName: 'node14') {
                    sh 'npm run sonar'
                 }
                }
            }
        }
        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'MINUTES') {
                waitForQualityGate webhookSecretId: 'sonarwebhook', abortPipeline: true
              }
            }
          }
        stage('Create Docker Image') {
            steps {
                  nodejs(nodeJSInstallationName: 'node14') {
                    sh 'npm run createImage'
                }
            }
        }

        // stage('Notify') {
        //     steps {
        //         slackSend channel: '#your-channel', message: 'Build completed!'
        //     }
        // }

      

        // stage('Code quality') {
        //     steps {
        //         sonarqube environment: [
        //             token: "YOUR_SONARQUBE_TOKEN",
        //             url: "http://your-sonarqube-server"
        //         ]
        //     }
        // }

        stage('Code review') {
            steps {
                input 'Approve this build?'
            }
        }

           stage('Deploying') {
            steps {
                echo "Deployed"
            }
        }

        // stage('Report') {
        //     steps {
        //         junit '**/test-results/*.xml',
        //         publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'coverage', reportFiles: 'index.html', reportName: 'Code coverage'])
        //     }
        // }
    }
}