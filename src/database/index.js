import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../models/User";
import Aluno from "../models/Aluno";

const models = [User, Aluno];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
