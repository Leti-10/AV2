import '../Styles/Aero.css';

interface ModalProps {
  onClose: () => void;
}

function ModalPeca({ onClose }: ModalProps) {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Peça cadastrada com sucesso! (Simulação sem back-end)");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>x</button>
        <h3>Cadastrar Nova Peça</h3>

        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="nome">Nome da Peça</label>
            <input id="nome" type="text" placeholder="Ex: Turbina T-1000" required />
          </div>

          <div className="form-group">
            <label htmlFor="fornecedor">Fornecedor</label>
            <input id="fornecedor" type="text" placeholder="Ex: GE Aviation" required />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo da Peça</label>
            <select id="tipo" required>
              <option value="">Selecione</option>
              <option value="Nacional">Nacional</option>
              <option value="Importada">Importada</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="status">Status da Peça</label>
            <select id="status" required>
              <option value="Em Produção">Em Produção</option>
              <option value="Pronta">Pronta</option>
              <option value="Em Transporte">Em Transporte</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalPeca;
