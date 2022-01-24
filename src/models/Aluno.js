import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 150],
              msg: "Campo nome deve ter entre 3 e 150 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 150],
              msg: "Campo nome deve ter entre 3 e 150 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Precisa ser um numero inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Precisa ser um numero inteiro ou com ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Precisa ser um numero inteiro ou com ponto flutuante",
            },
          },
        },
      },
      {
        sequelize,
        // eslint-disable-next-line comma-dangle
      }
    );
    return this;
  }
}
