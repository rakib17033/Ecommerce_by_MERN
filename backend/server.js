const app = require('./app')
const connectDatabase = require('./config/database')
require('dotenv').config({ path: './config/config.env' });

// Database Connection
connectDatabase();

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV
app.listen(port,()=>console.log(`server listening on port ${port} in ${env} mode`))