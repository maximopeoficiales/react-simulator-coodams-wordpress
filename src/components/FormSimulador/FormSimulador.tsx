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
import { roundByNumber } from "../../api/utils/roundByNumber";
import { TasaContext } from "../../context/TasaContext";
import { useActive } from "../../hooks/useActive";
import FormDetalle from "../FormDetalle/FormDetalle";
import ModalDetail from "../ModalDetail/ModalDetail";

interface MyProps {}
const FormSimulador = (props: MyProps) => {
  const { tasaData } = useContext(TasaContext);
  // states
  const [idSeleccionado, setIdSeleccionado] = useState<string>(
    CreditoType.LIBRE_INVERSION
  );
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [montoSolicitado, setMontoSolicitado] = useState(0);
  const [creditoNames, setCreditoNames] = useState<CreditoData[]>([]);
  const [plazo, setPlazo] = useState(18);
  const [mostrarAntiguedad, setMostrarAntiguedad] = useState(false);
  const [antiguedad, setAntiguedad] = useState("");
  const [tasa, setTasa] = useState(0);
  const [creditoSeleccionado, setCreditoSeleccionado] = useState<
    Partial<CreditoData>
  >({});
  const { active: showAlertAmountMax, setActive: setActiveAlertAmountMax } =
    useActive();

  // effects
  useEffect(() => {
    // obtengo opciones por defecto
    const creditoDataFormated = creditoDataFilter(creditoData, tasaData);
    console.log(creditoDataFormated);

    setCreditoNames(creditoDataFormated);
  }, [tasaData]);

  useEffect(() => {
    let creditoData2 = addTasasDataApi(creditoData, tasaData);
    let creditoFilter = creditoData2.find((e) => e.id === idSeleccionado);

    setTasa(parseFloat((creditoFilter?.tasa ?? 0).toString()));
    setPlazo(creditoFilter?.plazos[0] ?? 0);
    setCreditoSeleccionado(creditoFilter ?? {});
  }, [idSeleccionado, tasaData]);

  // events listener
  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    let montoMaximo = creditoSeleccionado?.montoMax ?? 1;
    let monto = parseFloat(e.target.value);
    let round10000 = roundByNumber(monto, 10000);
    if (round10000 <= montoMaximo) {
      setMontoSolicitado(round10000);
      setActiveAlertAmountMax(false);
    } else {
      setActiveAlertAmountMax(true);
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Te haz pasado el limite de monto para este Tipo de Credito",
      // });
      // setMontoSolicitado(0);
    }
  };

  const handleChangePlazo = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlazo(parseInt(e.target.value));
    setMostrarDetalle(false);
  };

  const handlerChangeSelectCredito = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveAlertAmountMax(false);
    setMontoSolicitado(0);
    let idSelect = e.target.value;
    setIdSeleccionado(idSelect);
    setMostrarAntiguedad(idSelect === CreditoType.VEHICULO);
    setMostrarDetalle(false);
  };

  const handleChangeAntiguedad = (e: ChangeEvent<HTMLSelectElement>) => {
    let tasa = getTasaByAntiguedad(e.target.value, tasaData);
    setTasa(parseFloat(tasa.toString()));
    setAntiguedad(e.target.value);
    setMostrarDetalle(false);
  };

  const calcularCredito = () => {
    if (montoSolicitado !== 0) {
      setMostrarDetalle(true);
      setMostrarModal(true);
    } else {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "No puedes hacer una prestamo con Monto: 0",
      // });
    }
    // console.log(montoSolicitado, tasa, plazo);
  };

  return (
    <div className="container-simulador">
      <div className="simulador-formulario">
        <div className="d-flex justify-content-end">
          <span className="alerta-monto-max">
            {showAlertAmountMax && "Este el monto máximo"}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <b className="simulador-titulo-formulario">Monto Solicitado</b>
          </span>

          <div className="d-flex justify-content-center align-items-center">
            <span className="mx-2">$</span>
            <input
              onChange={handleChangeRange}
              type="number"
              className="w-100 text-right my-2 simulador-input simulador-caja-monto"
              min="0"
              step="0.01"
              max={creditoSeleccionado?.montoMax ?? 1}
              value={montoSolicitado}
            />
            {/* {numberWithCommas(montoSolicitado, ".")} */}
          </div>
        </div>
        {/* <div className="d-flex">
          <input
            onChange={handleChangeRange}
            type="number"
            className="w-100 my-2 simulador-input"
            min="0"
            step="0.01"
            max={creditoSeleccionado?.montoMax ?? 1}
            value={montoSolicitado}
          />
        </div> */}
        <div className="">
          <input
            onChange={handleChangeRange}
            type="range"
            className="w-100 range simulador-scroll-input  "
            min="0"
            max={creditoSeleccionado?.montoMax ?? 1}
            value={montoSolicitado}
          />
          <small className="text-muted simulador-text-muted">
            Desliza para elegir el monto deseado de su préstamo
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="idSelectCredito" className="d-flex my-2">
            <b className="simulador-titulo-formulario">Crédito</b>
          </label>
          <select
            id="idSelectCredito"
            className="w-100 simulador-select"
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
            <b className="simulador-titulo-formulario">Plazos / Cuotas</b>
          </label>
          <select
            id="idSelectPlazo"
            className="w-100 simulador-select"
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
            <small className="text-muted my-2 d-block">
              Selecciona la Antiguedad como asociado de la cooperativa
            </small>
          </div>
        )}
        <button
          onClick={calcularCredito}
          className="my-2 w-100 simulador-button"
        >
          Calcular
        </button>
      </div>

      <div className="my-auto">
        {mostrarDetalle ? (
          <>
            <h2 className="text-center">Detalle del Prestamo</h2>
            <FormDetalle data={{ tasa, plazo, montoSolicitado }} />
            <ModalDetail
              data={{ tasa, plazo, montoSolicitado }}
              visible={mostrarModal}
              setVisible={setMostrarModal}
            />
          </>
        ) : (
          <p>{/* <b>Una Imagen</b> */}</p>
        )}
      </div>
    </div>
  );
};

export default FormSimulador;
