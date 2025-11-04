import { useState } from 'react';
import '../Styles/Aero.css';

function ModalFuncionario({ onClose, onSave }: any) {
  const [form, setForm] = useState({
    nome: '',
    funcao: 'Funcionário',
    usuario: '',
    senha: '',
    ativo: true,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>x</button>
        <h2>Cadastrar Funcionário</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>Nome:</label>
          <input name="nome" value={form.nome} onChange={handleChange} required />

          <label>Função:</label>
          <select name="funcao" value={form.funcao} onChange={handleChange}>
            <option value="Administrador">Administrador</option>
            <option value="Engenheiro">Engenheiro</option>
            <option value="Operador">Operador</option>
          </select>

          <label>Usuário:</label>
          <input name="usuario" value={form.usuario} onChange={handleChange} required />

          <label>Senha:</label>
          <input
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
            required
          />

          <button type="submit" className="save-btn">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalFuncionario;
