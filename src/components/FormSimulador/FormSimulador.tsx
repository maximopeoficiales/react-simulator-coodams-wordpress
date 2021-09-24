import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  CreditoData,
  creditoData,
  CreditoType,
} from "../../api/dto/data/credito.data";
import { creditoDataFilter } from "../../api/utils/creditoFormated";
import { TasaContext } from "../../context/TasaContext";
import FormDetalle from "../FormDetalle/FormDetalle";

interface MyProps {}
const FormSimulador = (props: MyProps) => {
  const { tasaData } = useContext(TasaContext);
  const [idSeleccionado, setIdSeleccionado] = useState<string>(
    CreditoType.LIBRE_INVERSION
  );
  const [montoSolicitado, setMontoSolicitado] = useState(1);
  const [creditoNames, setCreditoNames] = useState<CreditoData[]>([]);
  const [plazo, setPlazo] = useState(1);
  const [mostrarAntiguedad, setMostrarAntiguedad] = useState(false);
  const [antiguedad, setAntiguedad] = useState("");
  let creditoSeleccionado = creditoData.find((e) => e.id === idSeleccionado);

  useEffect(() => {
    // obtengo opciones por defecto
    const creditoDataFormated = creditoDataFilter(creditoData, tasaData);
    setCreditoNames(creditoDataFormated);
  }, [tasaData]);

  // events listener
  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    setMontoSolicitado(parseInt(e.target.value));
  };

  const handleChangePlazo = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlazo(parseInt(e.target.value));
  };
  const handleChangeAntiguedad = (e: ChangeEvent<HTMLSelectElement>) => {
    setAntiguedad(e.target.value);
  };

  const handlerChangeSelectCredito = (e: ChangeEvent<HTMLSelectElement>) => {
    setMontoSolicitado(0);
    let idSelect = e.target.value;
    console.log(idSelect);
    setIdSeleccionado(idSelect);
    setMostrarAntiguedad(idSelect === CreditoType.VEHICULO);
  };

  return (
    <div className="container-simulador">
      <div className="">
        <div className="d-flex justify-content-between">
          <span>
            <b>Monto Solicitado</b>
          </span>
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
            max={creditoSeleccionado?.montoMax ?? 1}
            value={montoSolicitado}
          />
          <small>Desliza para elegir el monto deseado de su préstamo</small>
        </div>

        <div className="form-group">
          <label htmlFor="idSelectCredito" className="d-flex my-2">
            <b>Crédito</b>
          </label>
          <select
            id="idSelectCredito"
            className="form-control"
            onChange={handlerChangeSelectCredito}
            value={idSeleccionado}
          >
            {creditoNames.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="idSelectCredito" className="d-flex my-2">
            <b>Plazos / Cuotas</b>
          </label>
          <select
            id="idSelectCredito"
            className="form-control"
            onChange={handleChangePlazo}
            value={plazo}
          >
            {creditoSeleccionado?.plazos.map((e, index) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        {mostrarAntiguedad && (
          <div className="form-group">
            <label htmlFor="idSelectAntiguedad" className="d-flex my-2">
              <b>Antiguedad</b>
            </label>
            <select
              id="idSelectAntiguedad"
              className="form-control"
              onChange={handleChangeAntiguedad}
              value={antiguedad}
            >
              {creditoSeleccionado?.antiguedades?.map((e, index) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <FormDetalle />
    </div>
  );
};

export default FormSimulador;
