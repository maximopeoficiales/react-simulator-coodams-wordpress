import "./App.css";
import Simulador from "./components/Simulador/Simulador";
import Spinner from "./components/ui/Spinner/Spinner";
import { config } from "./config/config";
import { TasaContext } from "./context/TasaContext";
import { useFetch } from "./hooks/useFetch/useFetch";

function App() {
  const { data, loading } = useFetch(
    `${config.URL_API_BASE}/${config.URL_GET_OPTIONS}`
  );

  if (loading) {
    return (
      <>
        <h4 className="text-center">Cargando Simulador ...</h4>
        <Spinner />
      </>
    );
  }

  return (
    <TasaContext.Provider value={{ tasaData: data }}>
      <Simulador />
    </TasaContext.Provider>
  );
}

export default App;
