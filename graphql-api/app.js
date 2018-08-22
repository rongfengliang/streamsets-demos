require('babel-polyfill');
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('./lib');
const compression = require('compression');
app.use(compression());
const proxyUrl = 'http://admin:admin@localhost:18630/rest';
const pathToSwaggerSchema = `${__dirname}/api/swagger.json`;
const customHeaders = {
  "accept-encoding": "identity"
};

graphQLSchema(pathToSwaggerSchema, proxyUrl, customHeaders).then(schema => {
  app.use('/graphql', graphqlHTTP(() => {
    return {
      schema,
      graphiql: true
    };
  }));

  app.listen(3009, '0.0.0.0', () => {
    console.info('http://localhost:3009/graphql');
  });
}).catch(e => {
  console.log(e);
});