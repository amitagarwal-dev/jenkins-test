pipeline{
    agent any
    stages{
        stage("Unit Testing"){
            steps{
                echo "========executing A========"
                sh "npm test"
            }
        }
        stage('SonarQube Analysis') {
            def scannerHome = tool 'sonarqube-coverage';
            withSonarQubeEnv() {
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}