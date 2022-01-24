import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body; // pega o email e password do body
    // verifica se tem email e senha
    if (!email || !password) {
      return res.status(401).json({
        erros: ["Credenciais invalidas"],
      });
    }
    // busca o usuario e valida se o emal é igual o que veio no body
    const user = await User.findOne({ where: { email } });
    // se nao for da erro
    if (!user) {
      return res.status(401).json({
        erros: ["Usuario não existe"],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: ["Senha invalida"],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({ token });
  }
}

export default new TokenController();
