import express from 'express';
import path from 'path';
import api from './routes/api.js';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { dirname } from 'path';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { MONGODB_URL } = process.env;

const app = express();
// The following checks if an env is defined and uses the respective port there or
// it uses the port 3001 otherwise
const port = process.env.PORT || 3001;
mongoose.connect(MONGODB_URL);

// This makes the server "understand" json
app.use(express.json());

// Serve the React static files after build
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Serve API
app.use('/api', api);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
