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
                        git  branch: 'main', url : 'https://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@github.com/Adnan-Aashiq/cypress-automation-course-code.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
                // stage('Slave Node2'){
                //     agent {
                //         label "remote_node2"
                //     }
                //     steps{
                //         git  branch: 'main', url : 'https://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@github.com/Adnan-Aashiq/cypress-automation-course-code.git'
                //         bat 'npm install'
                //         bat 'npm update'
                //         bat 'npm run %Script%'
                //     }
                // }
                
            }
        }
    }
}