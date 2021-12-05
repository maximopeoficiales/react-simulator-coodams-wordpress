import { createContext } from 'react'
import { TasaData } from '../api/dto/tasa.dto';

interface TasaProvider {
    tasaData: TasaData,
}

export const TasaContext = createContext<TasaProvider>({
    tasaData: {
        monto_max_libre_inversion: 1,
        monto_max_vehiculo: 1,
        monto_max_vivienda: 1,
        sim_libre_inversion: true,
        sim_vehiculo: true,
        sim_vivienda: true,
    }
});