import { useState } from 'react';
import ModalPeca from '../Components/ModalPeca';
import '../Styles/Aero.css';

const mockPecas = [
  { id: 'P-101', nome: 'Turbina T-1000', fornecedor: 'GE Aviation', tipo: 'Importada', status: 'Em Produção' },
  { id: 'P-102', nome: 'Asa Lateral', fornecedor: 'Embraer', tipo: 'Nacional', status: 'Pronta' },
  { id: 'P-103', nome: 'Hélice H-300', fornecedor: 'Rolls Royce', tipo: 'Importada', status: 'Em Transporte' },
  { id: 'P-104', nome: 'Sistema de Navegação GPS', fornecedor: 'Garmin', tipo: 'Importada', status: 'Em Produção' },
  { id: 'P-105', nome: 'Trem de Pouso Principal', fornecedor: 'Safran', tipo: 'Importada', status: 'Pronta' },
  { id: 'P-106', nome: 'Fuselagem Central', fornecedor: 'Embraer', tipo: 'Nacional', status: 'Em Produção' },
  { id: 'P-107', nome: 'Assento Ejetor', fornecedor: 'Martin-Baker', tipo: 'Importada', status: 'Em Transporte' },
  { id: 'P-108', nome: 'Janela da Cabine', fornecedor: 'GKN Aerospace', tipo: 'Importada', status: 'Pronta' }
];

function Pecas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Pronta': return 'status-pill pronta';
      case 'Em Produção': return 'status-pill producao';
      case 'Em Transporte': return 'status-pill transporte';
      default: return 'status-pill';
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gerenciamento de Peças</h1>
        <button onClick={() => setIsModalOpen(true)}>+ Cadastrar Peça</button>
      </div>

      <div className="aeronaves-grid">
        {mockPecas.map((peca) => (
          <div className="aeronave-card" key={peca.id}>
            <h2>{peca.nome}</h2>
            <p><strong>Código:</strong> {peca.id}</p>
            <p><strong>Fornecedor:</strong> {peca.fornecedor}</p>
            <p><strong>Tipo:</strong> {peca.tipo}</p>
            <span className={getStatusClass(peca.status)}>{peca.status}</span>
          </div>
        ))}
      </div>

      {isModalOpen && <ModalPeca onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Pecas;
