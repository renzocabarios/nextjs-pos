const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  NODE_DOCKER_PORT,
  BCRYPT_SALT,
} = process.env;

export default {
  PORT: parseInt(NODE_DOCKER_PORT, 10) || 3000,
  BCRYPT_SALT: Number(BCRYPT_SALT) || 10,
  MONGOD_DB: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};
