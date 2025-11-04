import { useState } from "react";
import jsPDF from "jspdf";

function Relatorios() {
  const [aeronaveSelecionada, setAeronaveSelecionada] = useState("");
  const [relatorios, setRelatorios] = useState<
    { id: number; aeronave: string; data: string }[]
  >([]);

  const aeronaves = [
    { id: 1, nome: "Embraer E190" },
    { id: 2, nome: "Boeing 737" },
    { id: 3, nome: "Airbus A320" },
  ];

  const gerarRelatorioPDF = (aeronave: string) => {
    const doc = new jsPDF();
    const dataAtual = new Date().toLocaleString("pt-BR");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Relatório de Aeronave", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Aeronave: ${aeronave}`, 20, 40);
    doc.text(`Data de geração: ${dataAtual}`, 20, 50);

    doc.text("Resumo Operacional:", 20, 70);
    doc.text("- Horas de voo: 320", 30, 80);
    doc.text("- Manutenções realizadas: 5", 30, 90);
    doc.text("- Peças trocadas: 12", 30, 100);

    doc.save(`Relatorio_${aeronave}_${Date.now()}.pdf`);

    const novoRelatorio = {
      id: Date.now(),
      aeronave,
      data: dataAtual,
    };
    setRelatorios((prev) => [...prev, novoRelatorio]);
  };

  const handleGerar = () => {
    if (!aeronaveSelecionada) {
      alert("Selecione uma aeronave primeiro!");
      return;
    }
    gerarRelatorioPDF(aeronaveSelecionada);
  };

  return (
    <div className="page-container">
      <h1>Relatórios de Aeronaves</h1>
      <p>Selecione uma aeronave para visualizar ou gerar novos relatórios.</p>

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

        <button className="button-rel" onClick={handleGerar}>Gerar e Baixar Relatório</button>
      </div>

      {aeronaveSelecionada && (
        <div className="report-section">
          <h2>Relatórios da aeronave: {aeronaveSelecionada}</h2>

          {relatorios.filter((r) => r.aeronave === aeronaveSelecionada).length === 0 ? (
            <p>Nenhum relatório gerado ainda.</p>
          ) : (
            <table className="table-relatorios">
              <thead>
                <tr>
                  <th>Data de geração</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {relatorios
                  .filter((r) => r.aeronave === aeronaveSelecionada)
                  .map((r) => (
                    <tr key={r.id}>
                      <td>{r.data}</td>
                      <td>
                        <button
                          onClick={() => gerarRelatorioPDF(r.aeronave)}
                          className="button-rel"
                        >
                          Baixar novamente
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Relatorios;
