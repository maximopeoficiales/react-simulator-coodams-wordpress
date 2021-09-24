import { CreditoData } from "../dto/data/credito.data";
import { TasaData } from "../dto/tasa.dto";

export const addTasasDataApi = (creditoData: CreditoData[], tasaData: TasaData) => {
    creditoData[0].tasa = parseFloat(tasaData.tasa_libre_inversion?.toString() ?? "1.6");
    creditoData[1].tasa = parseFloat(tasaData.tasa_vivienda?.toString() ?? "1.3");
    creditoData[2].tasa = parseFloat(tasaData.tasa_vehiculo_1?.toString() ?? "1.3");
    return creditoData;
}