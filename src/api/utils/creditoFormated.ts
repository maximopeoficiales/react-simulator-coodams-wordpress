import { CreditoData, CreditoType } from "../dto/data/credito.data"
import { TasaData } from "../dto/tasa.dto"

export const creditoDataFilter = (data: CreditoData[], tasaData: TasaData): CreditoData[] => {
    if (!(parseInt(tasaData.sim_libre_inversion ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.LIBRE_INVERSION);
    }

    if (!(parseInt(tasaData.sim_vehiculo ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.VEHICULO);
    }

    if (!(parseInt(tasaData.sim_vivienda ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.VIVIENDA);
    }
    return data;
}