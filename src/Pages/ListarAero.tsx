import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalAeronave from '../Components/Modal';
import '../styles/Aero.css';


const mockAero = [
  { id: 'A-101', modelo: 'Embraer E195-E2', tipo: 'Comercial' },
  { id: 'A-202', modelo: 'KC-390 Millennium', tipo: 'Militar' },
  { id: 'B-737', modelo: 'Boeing 737 MAX', tipo: 'Comercial' },
  { id: 'A-320', modelo: 'Airbus A320neo', tipo: 'Comercial' },
  { id: 'B-787', modelo: 'Boeing 787 Dreamliner', tipo: 'Comercial' },
  { id: 'E-175', modelo: 'Embraer E175', tipo: 'Comercial' },
  { id: 'G-650', modelo: 'Gulfstream G650ER', tipo: 'Executivo' },
  { id: 'C-550', modelo: 'Cessna Citation Latitude', tipo: 'Executivo' }
];

function ListarAero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    navigate(`/admin/aeronaves/${id}`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gerenciamento de Aeronaves</h1>
        <button onClick={() => setIsModalOpen(true)}>+ Cadastrar Aeronave</button>
      </div>
      <div className="aeronaves-grid">
        {mockAero.map((aeronave) => (
          <div className="aeronave-card" key={aeronave.id}>
            <h2>{aeronave.modelo}</h2>
            <p><strong>Código:</strong> {aeronave.id}</p>
            <p><strong>Tipo:</strong> {aeronave.tipo}</p>

            <button 
              className="ver-detalhes-btn"
              onClick={() => handleViewDetails(aeronave.id)}
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && <ModalAeronave onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ListarAero;
