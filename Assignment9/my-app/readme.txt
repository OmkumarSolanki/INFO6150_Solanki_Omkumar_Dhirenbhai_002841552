Go to backend folder
npm install
npm run devStart

Go to my-app folder
npm install
npm start


Using Postman

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

We can call Login with both Postman and Application

POST: /user/Login
localhost:3000/user/login
Type: Body , Json, raw
 {
    "emailId": "Test11@northeastern.edu",
    "password": "Om1234561"
}

and via Application using React app.


Dependencies used:
React Bootstrap
React Router
React Form
Axios - For Connection to Mongodb (Backend)


To Run the application
First fo npm install and then run the respective files




