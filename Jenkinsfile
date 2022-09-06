def COLOR_MAP = [
    'SUCCESS' : 'good',
    'FAILURE' : 'danger',
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline{
    agent any

    enviroment{
        BUILD_USER = ''
    }
    tools{
        nodejs "node"
    }

    stages{
        stage('Cypress paralled test suite'){
            parallel{
                stage('Slave Node1'){
                    agent {
                        label "remote_node1"
                    }
                    steps{
                        git  branch: 'main', url : 'git@github.com:Adnan-Aashiq/cypress-automation-course-code.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "remote_node2"
                    }
                    steps{
                        git  branch: 'main', url : 'git@github.com:Adnan-Aashiq/cypress-automation-course-code.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
            }
        }
    }
    post{
        always{
            script{
                BUILD_USER = getBuildUser()
            }
            slackSend channel:'jenkins-example',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message:"*${currentBuild.currentResult}: *{env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER} \n Tests: ${SPEC} executed at ${Browser}"
        }
    }
}