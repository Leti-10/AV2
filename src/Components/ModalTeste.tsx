import '../Styles/Aero.css';

interface ModalProps {
  onClose: () => void;
}

function ModalTeste({ onClose }: ModalProps) {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Teste cadastrado com sucesso! (Simulação sem back-end)");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Cadastrar Novo Teste</h3>

        <form onSubmit={handleSave}>
            
            <div className="form-group">
                <label htmlFor="idAero">Código da Aeronave</label>
                <input id='idAero' type="text" placeholder='Ex: X-1029' required/>
            </div>
            
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Teste</label>
            <select required>
                <option value="Eletrico">Elétrico</option>
                <option value="Hidraulico">Hidráulico</option>
                <option value="Aerodinamico">Aerodinâmico</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="data">Data</label>
            <input id="data" type="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="responsavel">Responsável</label>
            <select id="responsavel" required>
              <option value="">Selecione um funcionário</option>
              <option value="João Silva">João Silva</option>
              <option value="Maria Souza">Maria Souza</option>
              <option value="Carlos Lima">Carlos Lima</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-primary">Salvar Teste</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalTeste;
