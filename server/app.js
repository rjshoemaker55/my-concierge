const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphqiql: true
  })
);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
