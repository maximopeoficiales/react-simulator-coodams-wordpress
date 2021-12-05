import {
  getValorCuotaMensual,
  getValorInteresMensual,
} from "../../api/utils/getCuotaPrestamo";
import { numberWithCommas } from "../../api/utils/numberWithComas";

interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
}
const FormDetalle = (props: MyProps) => {
  const { montoSolicitado, plazo, tasa } = props.data;

  let valorCuotaMensual = Math.round(
    getValorCuotaMensual(montoSolicitado, plazo, tasa)
  );

  let valorInteresMensual = Math.round(
    getValorInteresMensual(montoSolicitado, plazo, tasa)
  );
  return (
    <div data-testid="FormDetalle" className="contenedor-detalle">
      <div className="contenededor-informacion-detalle">
        <div className="d-flex justify-content-between my-2">
          <span>
            <b className="simulador-color-valor">Tasa de Interes</b>
          </span>
          <span>
            <b className="simulador-color-valor">{tasa.toFixed(2)} %</b>
          </span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>
            <b className="simulador-color-valor">Valor Cuota Mensual</b>
          </span>
          <span>
            <b className="simulador-color-valor">
              ${numberWithCommas(valorCuotaMensual, ".")}
            </b>
          </span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>
            <b className="simulador-color-valor">Valor Total Intereses</b>
          </span>
          <span>
            <b className="simulador-color-valor">
              ${numberWithCommas(valorInteresMensual, ".")}
            </b>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <span>
          <b className="simulador-color-valor">Nota:</b>
        </span>
        <p className="my-0 text-muted2 simulador-texto-ayuda">
          Si tienes la opción de realizar abonos extras, consulta con un asesor
          y revisa tu proyección
        </p>
      </div>
    </div>
  );
};

export default FormDetalle;
