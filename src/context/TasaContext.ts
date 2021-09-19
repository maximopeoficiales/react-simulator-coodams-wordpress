import { createContext } from 'react'
import { TasaData } from '../api/dto/tasa.dto';

interface TasaProvider {
    tasaData?: TasaData,
}

export const TasaContext = createContext<TasaProvider>({});