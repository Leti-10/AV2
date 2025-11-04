import '../Styles/Aero.css';

interface ModalProps {
  onClose: () => void;
}

function ModalAeronave({ onClose }: ModalProps) {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Aeronave cadastrada com sucesso! (Simulação sem back-end)");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Cadastrar Nova Aeronave</h3>

        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="codigo">Código da Aeronave</label>
            <input id="codigo" type="text" placeholder="Ex: A-101" required />
          </div>

          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input id="modelo" type="text" placeholder="Ex: Embraer E195-E2" required />
          </div>

          <div className="form-group">
            <label htmlFor="capacidade">Capacidade</label>
            <input id="capacidade" type="number" placeholder="Ex: 132" min="1" required />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo da Aeronave</label>
            <select id="tipo" required>
              <option value="">Selecione</option>
              <option value="Comercial">Comercial</option>
              <option value="Militar">Militar</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="alcance">Alcance (em pés)</label>
            <input id="alcance" type="number" placeholder="Ex: 3500" min="0" required />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAeronave;
