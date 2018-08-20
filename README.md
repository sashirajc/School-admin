# School-admin


## Features

1. Code must be hosted on Github.
2. Code must be deployed on AWS (Optional)
3. Readme must contain links to hosted APIs and instructions on how to run application locally.
4. Error messages must have appropriate message and HTTP error codes.
5. Teachers and Students are identified by their email addresses. All APIs hence have input validation using regex to ensure only emails of the format teacher{something}@something.com can be valid emails for teachers. Similarly student{something}@something.com is the valid email format for students.


## User Stories
1. API to register students
    - Teachers and students are identified by their email addresses.
    - Multiple students can be registered under one teacher.
    - One student can be registered under multiple teachers.

2. API to get common students
    - Return students who are common to all teachers (if multiple teachers in query)
    - Return students who belong to a single teacher (if single teacher in query)

3. API to suspend students
    - Suspend student

4. API to retrieve notification
    - Return list of students who can receive notifications.
    - To receive notifications 
        * Student must not be suspended
        * Student must be registered under teacher (or)
        * Student must be mentioned in the notification message

## Github URL
https://github.com/sashirajc/School-admin

## Steps to run local version
1. Download latest version from Github (link above)
2. Run `npm install`
3. Run `npm run start`

## Steps to run the test cases
1. Navigate to /tests
2. Run `npm install mocha -g` to install mocha globally
3. Run `mocha commonStudents.js dev` to test the api deployed on AWS
4. Run `mocha commonStudents.js local` to test the api on localhost
5. Run `mocha suspendStudent.js dev/local studentName` where studentName is a student that is already added. A student can only be suspended once. If the student is already suspended then the positive test would fail.

## API Links
Status - http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/status

Register API - http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/api/register

Get Common Students API - http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/api/commonstudents

Suspend API - http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/api/suspend

Retrieve notifications API - http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/api/retrievefornotifications