const express = require('express');
const router = require('./routes/routes');
const checkRequest = require('./middleware/checkRequest');

const app = express();
const PORT = 3000;

app.use(checkRequest);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
