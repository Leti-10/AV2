import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ModalTeste from '../Components/ModalTeste.tsx';
import '../Styles/Aero.css';

const initialTestes = [
  { id: 'T-101', tipo: 'Hidráulico', data: '2025-11-05', responsavel: 'João Silva', status: 'Reprovado' },
  { id: 'T-102', tipo: 'Aerodinâmico', data: '2025-11-06', responsavel: 'Maria Souza', status: 'Reprovado' },
  { id: 'T-103', tipo: 'Elétrico', data: '2025-11-07', responsavel: 'Carlos Lima', status: 'Aprovado' },
  { id: 'T-104', tipo: 'Aerodinâmico', data: '2025-11-08', responsavel: 'Ana Pereira', status: 'Reprovado' },
  { id: 'T-105', tipo: 'Hidráulico', data: '2025-11-09', responsavel: 'Lucas Mendes', status: 'Aprovado' },
];

function Testes() {
  const [testes, setTestes] = useState(initialTestes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statuses = ['Reprovado', 'Aprovado'];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Reprovado': return 'pill Reprovado';
      case 'Aprovado': return 'pill Aprovado';
      default: return 'pill';
    }
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };


  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;
    if (source.droppableId === 'Reprovado' && destination.droppableId === 'Aprovado') {
      const updatedTestes = testes.map((teste) =>
        teste.id === result.draggableId ? { ...teste, status: 'Aprovado' } : teste
      );
      setTestes(updatedTestes);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gerenciamento de Testes</h1>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>+ Cadastrar Teste</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {statuses.map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided: any, snapshot: any) => (
                <div
                  className={`kanban-column ${snapshot.isDraggingOver ? 'drag-over' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="kanban-column-header">
                    <h2>{status}</h2>
                  </div>
                  <div className="kanban-column-body">
                    {testes
                      .filter((teste) => teste.status === status)
                      .map((teste, index) => (
                        <Draggable
                          key={teste.id}
                          draggableId={teste.id}
                          index={index}
                          isDragDisabled={status === 'Aprovado'}
                        >
                          {(provided: any) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="kanban-card"
                            >
                              <div className="kanban-card-top">
                                <span className={getStatusClass(teste.status)}>{teste.status}</span>
                                <span className="teste-id">#{teste.id}</span>
                              </div>
                              <h3 className="teste-tipo">{teste.tipo}</h3>
                              <p><strong>Data:</strong> {formatDate(teste.data)}</p>
                              <p><strong>Responsável:</strong> {teste.responsavel}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {isModalOpen && <ModalTeste onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Testes;
