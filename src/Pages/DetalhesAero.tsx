import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesAero() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('geral');

  const aeronave = {
    id: id,
    modelo: `Modelo ${id}`,
    tipo: 'Comercial',
    capacidade: 500,
    alcance: '10.000 km'
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Detalhes da Aeronave: {aeronave.modelo}</h1>
        <Link to="/admin/aeronaves">{"< Voltar para a Lista"}</Link>
      </div>

      <div className="tabs">
        <div className={`tab ${activeTab === 'geral' ? 'active' : ''}`} onClick={() => setActiveTab('geral')}>Geral</div>
        <div className={`tab ${activeTab === 'etapas' ? 'active' : ''}`} onClick={() => setActiveTab('etapas')}>Etapas</div>
        <div className={`tab ${activeTab === 'pecas' ? 'active' : ''}`} onClick={() => setActiveTab('pecas')}>Peças</div>
      </div>

      <div className="tab-content">
        {activeTab === 'geral' && (
          <div className="general-cards">
            <div className="general-card">
              <h4>Código</h4>
              <p>{aeronave.id}</p>
            </div>
            <div className="general-card">
              <h4>Tipo</h4>
              <p>{aeronave.tipo}</p>
            </div>
            <div className="general-card">
              <h4>Capacidade</h4>
              <p>{aeronave.capacidade}</p>
            </div>
            <div className="general-card">
              <h4>Alcance</h4>
              <p>{aeronave.alcance}</p>
            </div>
          </div>
        )}

        {activeTab === 'etapas' && (
          <div>
            <h3>Etapas de Produção (Simulação)</h3>
            <table className="data-table">
              <thead>
                <tr><th>Etapa</th><th>Status</th><th>Ações</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Montagem da Fuselagem</td>
                  <td>Em Andamento</td>
                  <td><button className='fin'>Finalizar Etapa</button></td>
                </tr>
                <tr>
                  <td>Instalação de Aviônicos</td>
                  <td>Pendente</td>
                  <td><button className='ini'>Iniciar Etapa</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'pecas' && (
          <div>
            <h3>Peças Associadas (Simulação)</h3>
            <table className="data-table">
              <thead>
                <tr><th>ID Peça</th><th>Nome</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>P-550</td><td>Turbina</td><td>Instalada</td></tr>
                <tr><td>P-551</td><td>Asa Direita</td><td>Pendente</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetalhesAero;
