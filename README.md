# School-admin


## Features

1. Code must be hosted on Github.
2. Code must be deployed on AWS (Optional)
3. Readme must contain links to hosted APIs and instructions on how to run application locally.
4. Error messages must have appropriate message and HTTP error codes.


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

## API Links
Status - http://localhost:8080/status

Register API - http://localhost:8080/api/register

Get Common Students API - http://localhost:8080/api/commonstudents

Suspend API - http://localhost:8080/api/suspend

Retrieve notifications API - http://localhost:8080/api/retrievefornotifications