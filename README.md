# School-admin


## Features

1. Teachers and students are identified by their email addresses.
2. Code must be hosted on Github.
3. Code must be deployed on AWS
4. Code must contain links to hosted APIs and instructions on how to run application locally.
5. Error messages must have appropriate message and HTTP error codes.


## User Stories
1. API to register students
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
