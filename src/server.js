require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const { connectDB } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta de prueba
app.get('/info', (_req, res) => {
  res.json({ name: 'SGIPE API', version: '1.0.0', status: 'ok' });
});

// 🔹 Rutas principales
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/proveedores', require('./routes/proveedor.routes'));



const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ Error al iniciar:', err.message);
    process.exit(1);
  }
})();

