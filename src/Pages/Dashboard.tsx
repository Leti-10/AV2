import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from "recharts";
import '../Styles/dashboard.css';

function Dashboard() {
  
  const producaoData = [
    { mes: "Jan", pecas: 120, prazo: 95 },
    { mes: "Fev", pecas: 98, prazo: 80 },
    { mes: "Mar", pecas: 135, prazo: 92 },
    { mes: "Abr", pecas: 150, prazo: 88 },
    { mes: "Mai", pecas: 175, prazo: 93 },
  ];

  const aeronavesData = [
    { name: "Andamento", value: 8 },
    { name: "Concluídas", value: 12 },
    { name: "Pendentes", value: 4 },
  ];

  const testesData = [
    { mes: "Jan", aprovados: 15, reprovados: 3 },
    { mes: "Fev", aprovados: 18, reprovados: 2 },
    { mes: "Mar", aprovados: 14, reprovados: 4 },
    { mes: "Abr", aprovados: 20, reprovados: 1 },
    { mes: "Mai", aprovados: 22, reprovados: 2 },
    { mes: "Jun", aprovados: 19, reprovados: 5 },
  ];

  const COLORS = ["#f1c40f", "#2ecc71", "#f10f66ff"];

  return (
    <div className="page-container dashboard-page">
      <h1>Visão Geral</h1>
      <p>Bem-vindo ao sistema Aerocode</p>
      <div className="cards-container">
        <div className="card">
          <h3>Aeronaves em Produção</h3>
          <p className="valor">8</p>
        </div>
        <div className="card">
          <h3>Peças Produzidas</h3>
          <p className="valor">1.234</p>
        </div>
        <div className="card">
          <h3>Prazo Médio Cumprido</h3>
          <p className="valor">91%</p>
        </div>
        <div className="card">
          <h3>Relatórios Emitidos</h3>
          <p className="valor">56</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-box">
          <h3>Peças Produzidas x Prazo (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={producaoData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pecas" fill="#3498db" name="Peças" />
              <Bar dataKey="prazo" fill="#2ecc71" name="Prazo (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Estado das Aeronaves</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={aeronavesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {aeronavesData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-box">
        <h3>Testes Aprovados x Reprovados (Ano)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={testesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="aprovados" stroke="#2ecc71" name="Aprovados" />
            <Line type="monotone" dataKey="reprovados" stroke="#e74c3c" name="Reprovados" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;