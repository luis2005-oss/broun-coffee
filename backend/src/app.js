/* eslint-disable no-undef */
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const { sequelize } = require('./models');

// --- IMPORTACIÓN DE RUTAS ---
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
// Importamos la ruta de Auth de tus compañeros
// OJO: Revisa si la carpeta es 'routes' o 'src/routes' dependiendo de dónde esté app.js
// Asumo que están en la misma carpeta 'routes' dentro de 'src'
const { authRouter } = require('./src/routes/authRuter'); 

dotenv.config();
const app = express(); // Mantenemos 'app' como estándar (tus compañeros usaron 'server')
const port = process.env.PORT || 3000;

// --- MIDDLEWARES GLOBALES (Combinados) ---
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agregado de tus compañeros
app.use(cookieParser()); // Agregado de tus compañeros
app.use(cors());

// --- DEFINICIÓN DE RUTAS ---
// Rutas de Autenticación (Login, Register)
app.use('/', authRouter); 

// Rutas de Negocio (Productos, Categorías)
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Ruta base de prueba
app.get('/api-status', (req, res) => {
  res.json({ message: 'API Broun Coffee funcionando' });
});

// --- LEVANTAR SERVIDOR ---
app.listen(port, async () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');
    // await sequelize.sync({ force: false }); // Descomentar solo si se necesita sincronizar cambios
  } catch (error) {
    console.error('Error de conexión BD:', error);
  }
});