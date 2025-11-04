import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesAero() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('geral');
  const [etapas, setEtapas] = useState([
    { id: 1, nome: 'Montagem da Fuselagem', status: 'Em Andamento' },
    { id: 2, nome: 'Instalação de Aviônicos', status: 'Pendente' },
  ]);

  const aeronave = {
    id: id,
    modelo: `Modelo ${id}`,
    tipo: 'Comercial',
    capacidade: 500,
    alcance: '10.000 km',
  };

  const iniciarEtapa = (id: number) => {
    setEtapas((prev) =>
      prev.map((etapa) =>
        etapa.id === id ? { ...etapa, status: 'Em Andamento' } : etapa
      )
    );
  };

  const finalizarEtapa = (id: number) => {
    setEtapas((prev) =>
      prev.map((etapa) =>
        etapa.id === id ? { ...etapa, status: 'Finalizado' } : etapa
      )
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Detalhes da Aeronave: {aeronave.modelo}</h1>
        <Link to="/admin/aeronaves">{"< Voltar para a Lista"}</Link>
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 'geral' ? 'active' : ''}`}
          onClick={() => setActiveTab('geral')}
        >
          Geral
        </div>
        <div
          className={`tab ${activeTab === 'etapas' ? 'active' : ''}`}
          onClick={() => setActiveTab('etapas')}
        >
          Etapas
        </div>
        <div
          className={`tab ${activeTab === 'pecas' ? 'active' : ''}`}
          onClick={() => setActiveTab('pecas')}
        >
          Peças
        </div>
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
            <h3>Etapas de Produção</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Etapa</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {etapas.map((etapa) => (
                  <tr key={etapa.id}>
                    <td>{etapa.nome}</td>
                    <td>{etapa.status}</td>
                    <td>
                      {etapa.status === 'Pendente' && (
                        <button className="ini" onClick={() => iniciarEtapa(etapa.id)}>
                          Iniciar Etapa
                        </button>
                      )}
                      {etapa.status === 'Em Andamento' && (
                        <button className="fin" onClick={() => finalizarEtapa(etapa.id)}>
                          Finalizar Etapa
                        </button>
                      )}
                      {etapa.status === 'Finalizado' && (
                        <span style={{ color: 'gray', fontStyle: 'italic' }}>Concluída</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'pecas' && (
          <div>
            <h3>Peças Associadas (Simulação)</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID Peça</th>
                  <th>Nome</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P-550</td>
                  <td>Turbina</td>
                  <td>Instalada</td>
                </tr>
                <tr>
                  <td>P-551</td>
                  <td>Asa Direita</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetalhesAero;
