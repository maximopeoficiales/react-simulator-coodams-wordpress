import { ChangeEvent, useContext, useMemo, useState } from "react";
import { creditoData } from "../../api/dto/data/credito.data";
import { creditoDataFilter } from "../../api/utils/creditoFormated";
import { TasaContext } from "../../context/TasaContext";
import FormDetalle from "../FormDetalle/FormDetalle";

interface MyProps {}
const FormSimulador = (props: MyProps) => {
  const { tasaData } = useContext(TasaContext);
  const [montoSolicitado, setMontoSolicitado] = useState(1);

  const creditoDataFormated = creditoDataFilter(creditoData, tasaData);

  console.log(tasaData);

  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    setMontoSolicitado(parseInt(e.target.value));
  };
  const handlerChangeSelectCredito = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="container-simulador">
      <div className="">
        <div className="d-flex justify-content-between">
          <span>Monto Solicitado</span>
          <span>
            <b>{montoSolicitado}</b>
          </span>
        </div>
        <div className="">
          <input
            onChange={handleChangeRange}
            type="range"
            className="w-100"
            min="1"
            max="100"
            value={montoSolicitado}
          />
          <small>Desliza para elegir el monto deseado de su préstamo</small>
        </div>

        <div className="form-group">
          <label htmlFor=""></label>
          <select
            className="form-control"
            onChange={handlerChangeSelectCredito}
          >
            {creditoDataFormated.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <FormDetalle />
    </div>
  );
};

export default FormSimulador;
