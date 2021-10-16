import { useState } from "react";
import FormDetalle from "../FormDetalle/FormDetalle";
import "./ModalDetail.css";

interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
  visible: boolean;
  setVisible: any;
}
const ModalDetail = (props: MyProps) => {
  const { data, visible, setVisible } = props;

  let classVisible = visible ? "is-visible" : "";
  const hidden = () => {
    setVisible("");
  };
  return (
    <div>
      <div className={`modal ${classVisible}`} data-animation="slideInOutLeft">
        <div className="modal-dialog">
          <header className="modal-header">
            <h3 className="my-0">
              <b className="simulador-titulo-detalle">Detalle del Prestamo</b>
            </h3>
            <button
              className="close-modal simulador-btn-hidden-modal"
              aria-label="close modal"
              data-close
              onClick={hidden}
            >
              ✕
            </button>
          </header>
          <section className="modal-content">
            <FormDetalle data={data} />
          </section>
          {/* <footer className="modal-footer">
            The footer of the first modal
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
