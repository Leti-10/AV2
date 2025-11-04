import { useState } from "react";
import jsPDF from "jspdf";

interface RelatorioData {
  id: number;
  aeronave: string;
  data: string;
  horasVoo: number;
  manutencoes: number;
  pecasTrocadas: number;
}

function Relatorios() {
  const [aeronaveSelecionada, setAeronaveSelecionada] = useState("");
  const [relatorios, setRelatorios] = useState<RelatorioData[]>([]);

  const aeronaves = [
    { id: 1, nome: "Embraer E190" },
    { id: 2, nome: "Boeing 737" },
    { id: 3, nome: "Airbus A320" },
  ];

  const downloadRelatorioPDF = (dados: RelatorioData) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Relatório de Aeronave", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Aeronave: ${dados.aeronave}`, 20, 40);
    doc.text(`Data de geração: ${dados.data}`, 20, 50);

    doc.text("Resumo Operacional (Dados do Histórico):", 20, 70);
    doc.text(`- Horas de voo: ${dados.horasVoo}`, 30, 80);
    doc.text(`- Manutenções realizadas: ${dados.manutencoes}`, 30, 90);
    doc.text(`- Peças trocadas: ${dados.pecasTrocadas}`, 30, 100);

    doc.save(`Relatorio_${dados.aeronave}_${dados.id}.pdf`);
  };

  const handleGerarNovoRelatorio = () => {
    if (!aeronaveSelecionada) {
      alert("Selecione uma aeronave primeiro!");
      return;
    }

    const novosDados: RelatorioData = {
      id: Date.now(),
      aeronave: aeronaveSelecionada,
      data: new Date().toLocaleString("pt-BR"),
      horasVoo: Math.floor(Math.random() * 500) + 100,
      manutencoes: Math.floor(Math.random() * 10) + 1,
      pecasTrocadas: Math.floor(Math.random() * 20),
    };

    setRelatorios((prevRelatorios) => [novosDados, ...prevRelatorios]);
    downloadRelatorioPDF(novosDados);
  };

  return (
    <div className="page-container">
      <h1>Relatórios de Aeronaves</h1>
      <p>Selecione uma aeronave para gerar um novo relatório de status.</p>

      <div className="filter-card">
        <label>Aeronave:</label>
        <select
          value={aeronaveSelecionada}
          onChange={(e) => setAeronaveSelecionada(e.target.value)}
        >
          <option value="">Selecione...</option>
          {aeronaves.map((a) => (
            <option key={a.id} value={a.nome}>
              {a.nome}
            </option>
          ))}
        </select>

        <button className="button-rel1" onClick={handleGerarNovoRelatorio}>
          Gerar e Baixar Relatório
        </button>
      </div>

      <div className="report-section">
        <h2>Histórico de Relatórios Gerados</h2>

        {relatorios.length === 0 ? (
          <p>Nenhum relatório gerado ainda.</p>
        ) : (
          <div className="report-card-list">
            {relatorios.map((r) => (
              <div className="report-card" key={r.id}>
                <div className="report-card-header">
                  <h3>{r.aeronave}</h3>
                  <span>{r.data}</span>
                </div>
                <div className="report-card-body">
                  <p><strong>Horas de Voo:</strong> {r.horasVoo}</p>
                  <p><strong>Manutenções:</strong> {r.manutencoes}</p>
                  <p><strong>Peças Trocadas:</strong> {r.pecasTrocadas}</p>
                </div>
                <div className="report-card-footer">
                  <button
                    onClick={() => downloadRelatorioPDF(r)}
                    className="button-rel"
                  >
                    Baixar novamente
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Relatorios;