#!/usr/bin/env groovy
@Library(["piper-lib@master","piper-lib-os@v1.121.0"]) _

pipeline {

    agent any

    stages {
        // stage('Init'){
        //     steps {
        //         setupPipelineEnvironment script: this
        //         mavenExecute script: this, goals: ['com.sap.cumulus.jiralinking:jira-comment-parser-maven-plugin:parse-comments'],
        //             globalSettingsFile: 'http://nexusmil.wdf.sap.corp:8081/nexus/service/local/templates/settings/LeanDI/content'
        //         stash name: 'traceabilityMapping', includes: 'jira.mapping', excludes: '', allowEmpty: true
        //         archiveArtifacts 'delivery.mapping, jira.mapping'
        //     }
        // }

        stage('Run Test') {
            parallel {
                stage('First Test') {
                    steps {
                        sleep(time: 2, unit: "SECONDS")
                        uiVeri5ExecuteTests script: this,
                        runOptions: [["--seleniumAddress=http://localhost:4444/wd/hub", "-v", "./tests/LoadApp/config.js"]
                    }
                }
            }
        }
    }