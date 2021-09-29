import FormDetalle from "../FormDetalle/FormDetalle";
import "./ModalDetail.css";

interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
}
const ModalDetail = (props: MyProps) => {
  const { data } = props;
  return (
    <div>
      <div
        className="modal is-visible"
        id="modal1"
        data-animation="slideInOutLeft"
      >
        <div className="modal-dialog">
          <header className="modal-header">
            The header of the first modal
            <button className="close-modal" aria-label="close modal" data-close>
              ✕
            </button>
          </header>
          <section className="modal-content">
            <FormDetalle data={data} />
          </section>
          <footer className="modal-footer">
            The footer of the first modal
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
