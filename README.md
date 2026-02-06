## User Data Manager

A simple React-based CRUD application to manage user data using a mock REST API.
The app supports Create, Read, Update, and Delete (CRUD) operations and is designed to be easily extensible for future fields. 

## Setup Instructions

1. Clone the repository
   git clone <repository-url>
   cd user-data-manager

2. Install dependencies
   npm install

3. API Configuration
   The application uses a public MockAPI endpoint directly inside the code for simplicity.
   

5. Start the React app
   npm start 


API Used

MockAPI is used to simulate a real backend service.

Supported operations:

GET /users – Fetch all users

POST /users – Add a new user

PUT /users/:id – Update user details

DELETE /users/:id – Delete a user   


## How to Add New Fields to the Form

The application is structured to make adding new fields simple and minimal.

Steps:

1. Add the field in MockAPI schema (e.g., address → String).
2. Add the field to component state.
3. Add a new input field in the Add/Edit form.
4. Include the field in the API request body (POST/PUT).
5. Display the field in the User List card if required.


Example (adding address):
   this.state = { address: "" };
   body: JSON.stringify({ firstName, lastName, email, phone, address })

  No major refactoring is required.   

## Deployment
   The application is deployed on Vercel and works correctly since the API URL is publicly accessible.