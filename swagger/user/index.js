module.exports = {
    "/user/login": {
      "post": {
        "tags": ["Users"],
        "summary": "Authorize the user",
        "description": "",
        "operationId": "login",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
           in: "body",
          "name": "body",
          "description": "User Credentials",
          "required": true,
          "schema": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string",
                "format": "email",
                "example": "m.khan@valair.com"
              },
              "password": {
                "type": "string",
                "example": "abc123"
              },
            },
          }
        }],
        "responses": {
          "400": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/user/signup": {
      "post": {
        "tags": ["Users"],
        "summary": "Create new user account, Same api use for creating driver, employee, providers etcc you just need to pass the specific role Id",
        "description": "",
        "operationId": "signup-admin",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{ in: "body",
          "name": "body",
          "description": "New user account details",
          "required": true,
          "schema": {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string",
                "example":"John"
              },
              "lastName": {
                "type": "string",
                "example":"Smith"
              },
              "email": {
                "type": "string",
                "format": "email",
                "example":"qaaa@qa.com"
              },
              "password": {
                "type": "string",
                "example":"abc1234"
              },
              "role":{
                "type":"string",
                "example":"buyer"
              }
            },
          }
        }],
        "responses": {
          "200": {
            "description": "Successfully create account"
          },
          "503": {
            "description": "Duplicate user"
          }
        }
      }
     
    },
    "/user": {
      "get": {
        "tags": ["Users"],
        "summary": "Get all list Users/user",
        "description": "only Admin can access this api, note: if you want to get single user details just pass the id ",
        "operationId": "get-users-list",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "query",
            "name": "email",
            "schema": { "type": "string" },
            "description": "search by email"
          },
          {
            "in": "query",
            "name": "role",
            "schema": {
              "type": "array",
              "items": {
                "type": "string",
              },
              "example": ['role id'],
              "summary": "[role id,role id]"
            },
          },
          {
            "in": "query",
            "name": "firstName",
            "schema": { "type": "string"},
            "description": "search by firstName"
          },
          {
            "in": "query",
            "name": "page",
            "schema": { "type": "integer","example": 1 },
            "description": "In which page number you want to go",
          },
          {
            "in": "query",
            "name": "limit",
            "schema": { "type": "integer","example": 10 },
            "description": "How many result should populate in list",
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully get"
          },
          "400": {
            "description": "Invalid Request"
          }
        }
      }
    },
    "/user/{id}": {
      "get": {
        "tags": ["Users"],
        "summary": "Get the user detail",
        "description": "only Admin can access this api, note: if you want to get single user details just pass the id ",
        "operationId": "get-user-details",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
            "in": "path",
            "name": "id",
            "schema":{
              "type": "string"
            },
            "description": "user id "
          }],
        "responses": {
          "200": {
            "description": "Successfully get"
          },
          "400": {
            "description": "Invalid Request"
          }
        }
      }
    }
  }