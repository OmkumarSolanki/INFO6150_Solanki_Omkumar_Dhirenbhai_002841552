To initialize new project
npm init -y
npm i express bcrypt nodemon mongoose 

To Start: npm run devStart

POST: /user/create 
localhost:3000/user/create
Type: Body , Json, raw
{
    "fullName": "Test Name",
    "emailId": "Test@northeastern.edu",
    "password": "Test@123"
}

GET: /user/getAll
localhost:3000/user/getAll

PUT: /user/edit
localhost:3000/user/edit
Type: Body , Json, raw
{
    "fullName": "Test Edited Name",
    "emailId": "Test@northeastern.edu",
    "password": "Test@12345"
}


DELETE: /user/delete
localhost:3000/user/delete
Type: Body , Json, raw
{
    "emailId": "Test@northeastern.edu"
}