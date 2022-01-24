import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../models/User";

const models = [User];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  // eslint-disable-next-line comma-dangle
  (model) => model.associate && model.associate(connection.models)
);
