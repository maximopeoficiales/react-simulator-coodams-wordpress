import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  CreditoData,
  creditoData,
  CreditoType,
} from "../../api/dto/data/credito.data";
import { addTasasDataApi } from "../../api/utils/addTasasData";
import { creditoDataFilter } from "../../api/utils/creditoFormated";
import { getTasaByAntiguedad } from "../../api/utils/getTasaByAntiguedad";
import { numberWithCommas } from "../../api/utils/numberWithComas";
import { TasaContext } from "../../context/TasaContext";
import FormDetalle from "../FormDetalle/FormDetalle";

interface MyProps {}
const FormSimulador = (props: MyProps) => {
  const { tasaData } = useContext(TasaContext);
  // states
  const [idSeleccionado, setIdSeleccionado] = useState<string>(
    CreditoType.LIBRE_INVERSION
  );
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [montoSolicitado, setMontoSolicitado] = useState(1);
  const [creditoNames, setCreditoNames] = useState<CreditoData[]>([]);
  const [plazo, setPlazo] = useState(1);
  const [mostrarAntiguedad, setMostrarAntiguedad] = useState(false);
  const [antiguedad, setAntiguedad] = useState("");
  const [tasa, setTasa] = useState(0);
  const [creditoSeleccionado, setCreditoSeleccionado] = useState<
    Partial<CreditoData>
  >({});

  // effects
  useEffect(() => {
    // obtengo opciones por defecto
    const creditoDataFormated = creditoDataFilter(creditoData, tasaData);
    setCreditoNames(creditoDataFormated);
  }, [tasaData]);

  useEffect(() => {
    let creditoData2 = addTasasDataApi(creditoData, tasaData);
    let creditoFilter = creditoData2.find((e) => e.id === idSeleccionado);
    setTasa(creditoFilter?.tasa ?? 0);
    setCreditoSeleccionado(creditoFilter ?? {});
  }, [idSeleccionado, tasaData]);

  // events listener
  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    let montoMaximo = creditoSeleccionado?.montoMax ?? 1;
    if (parseFloat(e.target.value) <= montoMaximo) {
      setMontoSolicitado(parseFloat(e.target.value));
    } else {
      setMontoSolicitado(0);
    }
  };

  const handleChangePlazo = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlazo(parseInt(e.target.value));
  };

  const handlerChangeSelectCredito = (e: ChangeEvent<HTMLSelectElement>) => {
    setMontoSolicitado(0);
    let idSelect = e.target.value;
    setIdSeleccionado(idSelect);
    setMostrarAntiguedad(idSelect === CreditoType.VEHICULO);
  };

  const handleChangeAntiguedad = (e: ChangeEvent<HTMLSelectElement>) => {
    let tasa = getTasaByAntiguedad(e.target.value, tasaData);
    setTasa(tasa);
    setAntiguedad(e.target.value);
  };

  const calcularCredito = () => {
    setMostrarDetalle(true);
    console.log(montoSolicitado, tasa, plazo);
  };

  return (
    <div className="container-simulador">
      <div className="">
        <div className="d-flex justify-content-between">
          <span>
            <b>Monto Solicitado</b>
          </span>

          <span>
            <b>$ {numberWithCommas(montoSolicitado)}</b>
          </span>
        </div>
        <input
          onChange={handleChangeRange}
          type="number"
          className="w-100 my-2"
          min="0"
          max={creditoSeleccionado?.montoMax ?? 1}
          value={montoSolicitado}
        />
        <div className="">
          <input
            onChange={handleChangeRange}
            type="range"
            className="w-100"
            min="0"
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
            className="w-100"
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
          <label htmlFor="idSelectPlazo" className="d-flex my-2">
            <b>Plazos / Cuotas</b>
          </label>
          <select
            id="idSelectPlazo"
            className="w-100 "
            onChange={handleChangePlazo}
            value={plazo}
          >
            {creditoSeleccionado?.plazos?.map((e, index) => (
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
              className="w-100"
              onChange={handleChangeAntiguedad}
              value={antiguedad}
            >
              {creditoSeleccionado?.antiguedades?.map((e, index) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
            <small>
              Selecciona la Antiguedad como asociado de la cooperativa
            </small>
          </div>
        )}
        <button onClick={calcularCredito} className="my-2 w-100">
          Calcular
        </button>
      </div>

      <div className="m-auto">
        {mostrarDetalle ? (
          <FormDetalle data={{ tasa, plazo, montoSolicitado }} />
        ) : (
          <p>
            <b>Una Imagen</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default FormSimulador;
