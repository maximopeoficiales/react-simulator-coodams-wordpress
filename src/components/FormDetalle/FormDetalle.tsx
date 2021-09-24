interface MyProps {
  data: { montoSolicitado: number; tasa: number; plazo: number };
}
const FormDetalle = (props: MyProps) => {
  const { montoSolicitado, plazo, tasa } = props.data;
  return (
    <div data-testid="FormDetalle" className="">
      <h1>FormDetalle component</h1>
      <p>{montoSolicitado}</p>
      <p>{plazo}</p>
      <p>{tasa}</p>
    </div>
  );
};

export default FormDetalle;
