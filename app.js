const express = require('express');
const authRouter = require('./routers/api/auth.route');
const registerRouter = require('./routers/api/register.route');
const serverConfig = require('./config/server.config');

const app = express();
const PORT = 3000;

serverConfig(app);

app.use('/', registerRouter, authRouter);

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
