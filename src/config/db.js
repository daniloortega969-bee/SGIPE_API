const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) throw new Error('MONGO_URI no definido');
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { });
  console.log('✅ Conectado a MongoDB');
}

module.exports = { connectDB };
