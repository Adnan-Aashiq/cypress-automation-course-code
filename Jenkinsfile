pipeline{
    agent any

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
                        sh 'printenv'
                        git url : 'https://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@github.com/Adnan-Aashiq/cypress-automation-course-code.git'
                        git branch: 'main'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
                // stage('Slave Node2'){
                //     agent {
                //         label "remote_node2"
                //     }
                //     steps{
                //         git url : 'https://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@github.com/Adnan-Aashiq/cypress-automation-course-code.git'
                //         bat 'npm install'
                //         bat 'npm update'
                //         bat 'npm run triggerAllTests-autostore-dashboard'
                //     }
                // }
            }
        }
    }
}