import { Antiguedad } from "../dto/data/credito.data";
import { TasaData } from "../dto/tasa.dto";

export const getTasaByAntiguedad = (antiguedad: string, tasaData: TasaData): number => {
    let tasa = 0;
    switch (antiguedad) {
        case Antiguedad.DE_12_36_MESES:
            tasa = tasaData.tasa_vehiculo_1 ?? 1.3;
            break;
        case Antiguedad.DE_37_120_MESES:
            tasa = tasaData.tasa_vehiculo_2 ?? 1.2;
            break;
        case Antiguedad.MAS_120_MESES:
            tasa = tasaData.tasa_vehiculo_3 ?? 1.1;
            break;
        default:
            break;
    }

    return tasa;
}