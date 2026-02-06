## User Data Manager

A simple React-based CRUD application to manage user data using a mock REST API.
The app supports Create, Read, Update, and Delete (CRUD) operations and is designed to be easily extensible for future fields. 

## Setup Instructions

1. Clone the repository
   git clone <repository-url>
   cd user-data-manager

2. Install dependencies
   npm install

3. Set up mock API using json-server
   Create a db.json file in the project root and run:
   npx json-server --watch db.json --port 3001

4. Configure environment variable
   Create a .env file:
   REACT_APP_API_URL=http://localhost:3001

5. Start the React app
   npm start 


## How to Add New Fields to the Form

The application is structured to make adding new fields simple and minimal.

Steps:

1. Add the new field in db.json (mock API).
2. Add the field to component state.
3. Add a new input field in the Add/Edit form.
4. Include the field in the API request body (POST / PATCH).
5. Display the field in the User List card if required.


Example (adding address):
   this.state = { address: "" };
   body: JSON.stringify({ firstName, lastName, email, phone, address })

No major refactoring is required.   