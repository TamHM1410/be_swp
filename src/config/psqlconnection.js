const { Client } = require('pg');

const psqlConnection = async () => {
  const client = new Client({
    host: '34.81.244.146',
    port: 5432,
    user: 'root',
    password: 'exevipvl',
    database: 'EXE201',
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL successfully');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL', err);
  }

  return client;
};

module.exports = { psqlConnection };
