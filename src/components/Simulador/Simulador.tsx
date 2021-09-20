import FormSimulador from "../FormSimulador/FormSimulador";

interface MyProps {}
const Simulador = (props: MyProps) => {
  return (
    <div data-testid="Simulador" className="container">
      <FormSimulador />
    </div>
  );
};

export default Simulador;
