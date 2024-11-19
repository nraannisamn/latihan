module.exports = {
  app: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  db: {
    connection: process.env.DB_CONNECTION || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "latihan",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST || "localhost",
    port: process.env.RABBITMQ_PORT || 5671,
  },
};
