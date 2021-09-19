import FormSimulador from "../FormSimulador/FormSimulador";

interface MyProps {}
const Simulador = (props: MyProps) => {
  return (
    <div data-testid="Simulador" className="">
      <FormSimulador />
    </div>
  );
};

export default Simulador;
