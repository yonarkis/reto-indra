// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "swapi",
    "version": "1"
  },
  "paths": {
    "/api": {
      "get": {
        "summary": "index",
        "description": "",
        "operationId": "index.get.api",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/people": {
      "get": {
        "summary": "people_index",
        "description": "",
        "operationId": "people_index.get.api/people",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/people/{id}": {
      "get": {
        "summary": "people_id",
        "description": "",
        "operationId": "people_id.get.api/people/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/people/submit": {
      "post": {
        "summary": "people_post",
        "description": "",
        "operationId": "people_post.post.api/people/submit",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/people/schema": {
      "get": {
        "summary": "people_schema",
        "description": "",
        "operationId": "people_schema.get.api/people/schema",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/films": {
      "get": {
        "summary": "films_index",
        "description": "",
        "operationId": "films_index.get.api/films",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/films/submit": {
      "post": {
        "summary": "films_post",
        "description": "",
        "operationId": "films_post.post.api/films/submit",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/films/{id}": {
      "get": {
        "summary": "films_id",
        "description": "",
        "operationId": "films_id.get.api/films/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/api/films/schema": {
      "get": {
        "summary": "films_schema",
        "description": "",
        "operationId": "films_schema.get.api/films/schema",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};