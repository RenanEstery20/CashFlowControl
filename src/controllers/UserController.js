import User from "../models/User";

class UserController {
  // cria novo user
  async store(req, res) {
    try {
      // Cria um novo objeto com os dados que vem do body
      const novoUser = await User.create(req.body);
      // desestrutura o array pegando apenas os dados de id e nome e email
      const { id, nome, email } = novoUser;
      return res.json({
        id,
        nome,
        email,
      }); /* se estiver tudo ok ele responde com
      um json os dados */
    } catch (e) {
      // se tiver erro
      return res.status(400).json({
        // retorna o status 400 e manda o json
        errors: e.errors.map((err) => err.message), // faz um for para mapear as msg de erro
      });
    }
  }

  // busca todos os users
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // buscar user pelo id
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // alterar o user

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ["ID não enviado"],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Apagar o user
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ["ID não enviado"],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
