import app from "./app";

const port = 3040;
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
