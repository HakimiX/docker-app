node {
   def commit_id

   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }

   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'echo node version'
       sh 'node --version'
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }

   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("hakimixx/docker-nodejs-demo:${commit_id}", '.').push()
     }
   }
}
