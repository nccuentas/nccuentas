const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
connectDB(); // Aquí sí se conecta

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
const accountRoutes = require('./routes/accountRoutes');
const clientRoutes = require('./routes/clientRoutes');

app.use('/api/accounts', accountRoutes);
app.use('/api/clients', clientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
