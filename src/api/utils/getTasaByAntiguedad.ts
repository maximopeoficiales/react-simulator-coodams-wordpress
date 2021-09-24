import { Antiguedad } from "../dto/data/credito.data";

export const getTasaByAntiguedad = (antiguedad: string): number => {
    let tasa = 0;
    switch (antiguedad) {
        case Antiguedad.DE_12_36_MESES:
            tasa = 1.3;
            break;
        case Antiguedad.DE_37_120_MESES:
            tasa = 1.2;
            break;
        case Antiguedad.MAS_120_MESES:
            tasa = 1.1;
            break;
        default:
            break;
    }

    return tasa;
}