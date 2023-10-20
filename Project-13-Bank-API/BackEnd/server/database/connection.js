
const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB';  // Utilisation de 127.0.0.1 au lieu de localhost

module.exports = async () => {
  try {
	console.log('databaseUrl',databaseUrl);
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
