import { useState } from 'react';
import { PiArrowsClockwiseBold } from "react-icons/pi";
import ModalPeca from '../Components/ModalPeca';
import '../Styles/Aero.css';

const statusList = ['Em Produção', 'Em Transporte', 'Pronta'];

const mockPecas = [
  { id: 'P-101', nome: 'Turbina T-1000', fornecedor: 'GE Aviation', tipo: 'Importada', status: 'Em Produção' },
  { id: 'P-102', nome: 'Asa Lateral', fornecedor: 'Embraer', tipo: 'Nacional', status: 'Pronta' },
  { id: 'P-103', nome: 'Hélice H-300', fornecedor: 'Rolls Royce', tipo: 'Importada', status: 'Em Transporte' },
  { id: 'P-104', nome: 'Sistema de Navegação GPS', fornecedor: 'Garmin', tipo: 'Importada', status: 'Em Produção' },
];

function Pecas() {
  const [pecas, setPecas] = useState(mockPecas);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Pronta': return 'status-pill pronta';
      case 'Em Produção': return 'status-pill producao';
      case 'Em Transporte': return 'status-pill transporte';
      default: return 'status-pill';
    }
  };

  const mudarStatus = (id: string) => {
    setPecas(prev =>
      prev.map(p => {
        if (p.id === id) {
          if (p.status === 'Pronta') return p; 
          const index = statusList.indexOf(p.status);
          const novoStatus = statusList[index + 1];
          return { ...p, status: novoStatus };
        }
        return p;
      })
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gerenciamento de Peças</h1>
        <button onClick={() => setIsModalOpen(true)}>+ Cadastrar Peça</button>
      </div>

      <div className="aeronaves-grid">
        {pecas.map((peca) => (
          <div className="aeronave-card" key={peca.id}>
            <h2>{peca.nome}</h2>
            <p><strong>Código:</strong> {peca.id}</p>
            <p><strong>Fornecedor:</strong> {peca.fornecedor}</p>
            <p><strong>Tipo:</strong> {peca.tipo}</p>

            <div className="status-container">
              <span className={getStatusClass(peca.status)}>{peca.status}</span>
              <button
                onClick={() => mudarStatus(peca.id)}
                className={`mudar-btn ${peca.status === 'Pronta' ? 'disabled' : ''}`}
                disabled={peca.status === 'Pronta'}
                title={
                  peca.status === 'Pronta'
                    ? 'Peça finalizada — status não pode mais ser alterado'
                    : 'Avançar para o próximo status'
                }
              >
                <PiArrowsClockwiseBold />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <ModalPeca onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Pecas;
