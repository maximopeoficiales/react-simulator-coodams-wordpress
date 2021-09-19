import { useContext } from "react";
import { TasaContext } from "../../context/TasaContext";

interface MyProps {}
const FormSimulador = (props: MyProps) => {
  const { tasaData } = useContext(TasaContext);

  return (
    <div data-testid="FormSimulador" className="">
      <h1>{tasaData?.tasa_libre_inversion}</h1>
    </div>
  );
};

export default FormSimulador;
