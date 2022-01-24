import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    try {
      // cria um novo objeto com os dados que vem do body
      const newStudents = await Aluno.create(req.body);
      // desta forma mostra todo os indices cadastrados
      // return res.json(newStudy);
      // desta forma mostra apenas os dados escolhido
      const { id, nome, sobrenome, email, idade, peso, altura } = newStudents;
      return res.json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const students = await Aluno.findAll();
      return res.json(students);
    } catch (e) {
      return res.json({ msg: "sem dados" });
    }
  }
}

export default new AlunoController();
