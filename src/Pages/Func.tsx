import { useState } from 'react';
import { FaEye, FaEyeSlash, FaTrash, FaEdit, FaPowerOff, FaPlus } from 'react-icons/fa';
import ModalFuncionario from '../Components/ModalFunc';
import '../Styles/Aero.css';

interface Funcionario {
  id: number;
  nome: string;
  funcao: 'Administrador' | 'Funcionário' | 'Operador';
  usuario: string;
  senha: string;
  ativo: boolean;
}

function Func() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    { id: 1, nome: 'João Silva', funcao: 'Administrador', usuario: 'joaos', senha: '12345', ativo: true },
    { id: 2, nome: 'Maria Oliveira', funcao: 'Funcionário', usuario: 'mariao', senha: 'abcd', ativo: false },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState<number | null>(null);

  const toggleAtivo = (id: number) => {
    setFuncionarios(prev =>
      prev.map(f => f.id === id ? { ...f, ativo: !f.ativo } : f)
    );
  };

  const deleteFuncionario = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este funcionário?')) {
      setFuncionarios(prev => prev.filter(f => f.id !== id));
    }
  };

  const handleAddFuncionario = (novo: Funcionario) => {
    setFuncionarios(prev => [...prev, { ...novo, id: Date.now() }]);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gerenciamento de Funcionários</h1>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          <FaPlus /> Cadastrar Funcionário
        </button>
      </div>

      <table className="funcionarios-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Usuário</th>
            <th>Senha</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(f => (
            <tr key={f.id} className={f.ativo ? 'ativo' : 'inativo'}>
              <td>{f.nome}</td>
              <td>{f.funcao}</td>
              <td>{f.usuario}</td>
              <td className="senha-cell">
                {showPassword === f.id ? f.senha : '••••••'}
                <button
                  className="senha-btn"
                  onClick={() => setShowPassword(showPassword === f.id ? null : f.id)}
                >
                  {showPassword === f.id ? <FaEyeSlash /> : <FaEye />}
                </button>
              </td>
              <td>
                <span className={`status ${f.ativo ? 'ativo' : 'inativo'}`}>
                  {f.ativo ? 'Ativo' : 'Inativo'}
                </span>
              </td>
              <td className="acoes">
                <button onClick={() => toggleAtivo(f.id)} className="btn-status">
                  <FaPowerOff />
                </button>
                <button className="btn-edit"><FaEdit /></button>
                <button onClick={() => deleteFuncionario(f.id)} className="btn-delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <ModalFuncionario
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddFuncionario}
        />
      )}
    </div>
  );
}

export default Func;
