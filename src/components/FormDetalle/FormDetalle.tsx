import { getValorCuotaMensual, getValorInteresMensual } from "../../api/utils/getCuotaPrestamo";
import { numberWithCommas } from "../../api/utils/numberWithComas";

interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
}
const FormDetalle = (props: MyProps) => {
  const { montoSolicitado, plazo, tasa } = props.data;

  let valorCuotaMensual = getValorCuotaMensual(montoSolicitado, plazo, tasa);

  let valorInteresMensual = getValorInteresMensual(
    montoSolicitado,
    plazo,
    tasa
  );
  return (
    <div data-testid="FormDetalle" className="">
      <h1>FormDetalle component</h1>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Tasa de Interes</b>
        </span>
        <span>
          <b>{tasa} %</b>
        </span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Valor Cuota Mensual</b>
        </span>
        <span>
          <b>${numberWithCommas(valorCuotaMensual)}</b>
        </span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Valor Interes Mensual</b>
        </span>
        <span>
          <b>${numberWithCommas(valorInteresMensual)}</b>
        </span>
      </div>

      <span>
        <b>Nota:</b>
      </span>
      <p className="my-0">
        Si tienes la opción de realizar abonos extras, consulta con un asesor y
        revisa tu proyección
      </p>
    </div>
  );
};

export default FormDetalle;
