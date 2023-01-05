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
            
                sh "sonar-scanner   -Dsonar.projectKey=local-test   -Dsonar.sources=.   -Dsonar.host.url=http://localhost:9000   -Dsonar.login=sqp_c19123a25187fb164efe54abfa4e8c4491c14f20"
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