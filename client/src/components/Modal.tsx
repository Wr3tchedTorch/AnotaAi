type ModalProps = {
  setTitleInput: any;
  setDescInput: any;
  handlePostNote: any;
  modalIdName: any;
};

const Modal = ({
  setTitleInput,
  setDescInput,
  handlePostNote,
  modalIdName,
}: ModalProps) => {
  return (
    <div
      className="modal fade"
      id={modalIdName}
      aria-labelledby={modalIdName + "Label"}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={modalIdName + "Label"}>
              Criar nova anotação
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input
                  type="email"
                  className="form-control border border-dark-subtle"
                  id={modalIdName + "Input"}
                  aria-describedby="emailHelp"
                  maxLength={40}
                  onChange={(e) => {
                    setTitleInput(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  className="form-control border border-dark-subtle"
                  id={modalIdName + "Textarea"}
                  rows={3}
                  maxLength={450}
                  onChange={(e) => {
                    setDescInput(e.target.value);
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handlePostNote}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
