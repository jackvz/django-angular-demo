const express = require('express');
const app = express();
const port = 4200

app.use(express.static('dist/frontend'));

app.listen(port, '0.0.0.0', () => console.log(`App listening on port ${port}!`))
