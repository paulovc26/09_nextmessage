import excluirUsuario from "./usuarios/excluirUsuario";
import obterTodos from "./usuarios/getAll";
import salvarUsuario from "./usuarios/salvarUsuario";

// Padrão Facade
export default class Backend {
  static readonly usuarios = {
    salvar: salvarUsuario,
    obter: obterTodos,
    excluir: excluirUsuario,
  };
}
