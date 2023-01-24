const scanner = require('sonarqube-scanner');
const packageJson = require('./package.json');
scanner(
  {
    serverUrl : packageJson.sonarServer,
    options: {
      'sonar.projectName': packageJson.name,      
      'sonar.projectDescription': packageJson.description,                                                                      
      'sonar.projectKey': packageJson.name,
      //'sonar.login': packageJson.sonarToken,                                                                          
      'sonar.language': 'js',  
      'sonar.tests':  'test',
      'sonar.sources': './src',
      'sonar.projectVersion':packageJson.version,
      // 'sonar.coverageReportPaths':'./coverage/'
      //'sonar.coverage.jacoco.xmlReportPaths': './coverage/'
    //   'sonar.test.inclusions':  'test/*.js',
      'sonar.javascript.lcov.reportPaths':'./coverage/lcov.info'   
    }
  }        
)