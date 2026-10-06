const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RailWay API",
      version: "1.0.0",
      description: "API for the RailWay train ticket booking website",
    },
    servers: [{ url: "http://localhost:4000" }],
  },
  apis: ["./server.js"], // files that contain the endpoint comments
};

module.exports = swaggerJsdoc(options);
