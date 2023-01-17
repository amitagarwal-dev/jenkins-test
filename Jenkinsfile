pipeline {
    agent any
    env.NODEJS_HOME = "${tool 'Node 14.21.2'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    // on windows
    env.PATH="${env.NODEJS_HOME};${env.PATH}"
    sh 'npm --version'
    stages {
         stage('Nodejs Version') {
            steps {
                echo "nodejs version"
                sh 'node -v'
            }
        }
        stage('Dependency management') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        // stage('Lint') {
        //     steps {
        //         sh 'npm run lint'
        //     }
        // }
        stage('Sonar Report') {
            steps {
                sh 'npm run sonar'
            }
        }
        stage('Create Docker Image') {
            steps {
                sh 'npm run createImage'
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

        // stage('Report') {
        //     steps {
        //         junit '**/test-results/*.xml',
        //         publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'coverage', reportFiles: 'index.html', reportName: 'Code coverage'])
        //     }
        // }
    }
}