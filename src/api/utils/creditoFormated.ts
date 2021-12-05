import { CreditoData, CreditoType } from "../dto/data/credito.data"
import { TasaData } from "../dto/tasa.dto"

export const creditoDataFilter = (data: CreditoData[], tasaDataAPI: TasaData): CreditoData[] => {
    // asignacion de montos maxios
    data = data.filter(e => {
        if (e.id === CreditoType.LIBRE_INVERSION) {
            e.montoMax = tasaDataAPI.monto_max_libre_inversion;
        }
        if (e.id === CreditoType.VEHICULO) {
            e.montoMax = tasaDataAPI.monto_max_vehiculo;
        }

        if (e.id === CreditoType.VIVIENDA) {
            e.montoMax = tasaDataAPI.monto_max_vivienda;
        }
    });
    if (!(parseInt(tasaDataAPI.sim_libre_inversion ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.LIBRE_INVERSION);
    }

    if (!(parseInt(tasaDataAPI.sim_vehiculo ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.VEHICULO);
    }

    if (!(parseInt(tasaDataAPI.sim_vivienda ?? ""))) {
        data = data.filter(e => e.id !== CreditoType.VIVIENDA);
    }
    return data;
}