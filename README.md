# Simple ToDo API with Custom Authentication

This repository contains a simple ToDo API with custom authentication built using Node.js, Express, MongoDB, and a custom authentication mechanism.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abeni001/Todo_backend.git
   cd todo-api
   ```
2.**Install dependecies:**

   ```bash
   npm install
   ```
3.**Configure environment variables:**
      
      Replace Port,Mongo_uri and Secret_str on key.js file with a your own values.

4.**Start the application:**

  ```bash
    npm run dev
  ```

## Api usage

1.Authentication

To register, send a POST request to api/v1/auth/sign-up with user credentials. You will receive a message that's inform your successful registration.

To Authentication , send a POST request to api/v1/auth/login with user credentials. you will recieve an access token upon successful authentication.

2.ToDo Endpoints

### Get All ToDos

- Endpoint: GET /todo
- Requires authentication

 ### Create ToDo

- Endpoint: POST /todo
- Requires authentication
- Payload: { "text": "Task Title" }
  
### Update ToDo

- Endpoint: PUT /todo/:id
- Requires authentication
- Payload: { "text": "Updated Title", "isCompleted": true or false }


### Delete ToDo

- Endpoint: DELETE /todo/:id
- Requires authentication

## Deployment

Deploy the API to your production environment. The API is accessible at:

[https://todobackend-production-cf9d.up.railway.app/api/v1/todo](https://todobackend-production-cf9d.up.railway.app/api/v1/todo)

Make sure to update the authentication mechanism and other configurations for the production environment.

          
