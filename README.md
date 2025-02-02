# Public API For Basic Information

This is a public api for retrieving basic information, was created in fulfillment of my HNGi12 Stage zero task

## Set-up Instructions

If you would like to run this project locally you would need to carry out the following steps:

1. Open your terminal and run `git clone https://github.com/Vaden89/HNGi2-Backend-Task-0.git`
2. Cd into the clone repository
3. Run `npm install` to install all dependencies
4. Run `npm start` to start up the server

### Requirements

1. node v20 or greater

## Endpoint URL

The only route in this API is "{base_url}/info" which accepts a get request and returns information...

### Example Request and Response

Request: GET http://localhost:3000/info

Response: {
"message": "Success",
"data": {
"email": "isaacshosanya89@gmail.com",
"current_datetime": "2025-02-02T23:48:34.422Z"
}
}

# Check out HNG

https://hng.tech/hire/nodejs-developers
