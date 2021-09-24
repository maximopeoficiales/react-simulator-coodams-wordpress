interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
}
const FormDetalle = (props: MyProps) => {
  const { montoSolicitado, plazo, tasa } = props.data;
  return (
    <div data-testid="FormDetalle" className="">
      <h1>FormDetalle component</h1>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Tasa de Interes</b>
        </span>
        <span>{montoSolicitado}</span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Valor Cuota</b>
        </span>
        <span>{plazo}</span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <span>
          <b>Valor Interes</b>
        </span>
        <span>{tasa}</span>
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
