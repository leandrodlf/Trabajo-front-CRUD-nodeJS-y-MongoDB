const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crudRoutes = require('./routes/crud');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', crudRoutes);

mongoose.connect('mongodb://localhost:27017/crud_usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Conectado a MongoDB'))
.catch((err) => console.error('❌ Error conectando a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
