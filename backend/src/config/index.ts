const { MONGO_DB, NODE_DOCKER_PORT } = process.env;

export default {
  PORT: parseInt(NODE_DOCKER_PORT, 10) || 3000,
  MONGO_DB:
    `mongodb://localhost:30001/simple-pos?directConnection=true` || MONGO_DB,
};
