import { getUrlApi } from "./api/utils/getUrlApi";
import "./App.css";
import Simulador from "./components/Simulador/Simulador";
import Spinner from "./components/ui/Spinner/Spinner";
import { TasaContext } from "./context/TasaContext";
import { useFetch } from "./hooks/useFetch/useFetch";

function App() {
  const URL_API = getUrlApi();
  const { data, loading } = useFetch(URL_API);

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
