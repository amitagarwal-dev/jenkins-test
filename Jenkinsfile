pipeline{
    agent any
    stages{
          stage('SonarQube Analysis') {
            steps{
                sh "sonar-scanner   -Dsonar.projectKey=local-test   -Dsonar.sources=.   -Dsonar.host.url=http://localhost:9000   -Dsonar.login=sqp_c19123a25187fb164efe54abfa4e8c4491c14f20"
            }
        }
        stage("building"){
            steps{
                echo "========executing A========"
                sh "npm install"
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