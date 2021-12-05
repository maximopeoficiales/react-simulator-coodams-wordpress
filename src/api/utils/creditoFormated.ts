import { config } from "../../config/config";
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
        return e;
    });
    let configShowOnly = getConfigShowOnly();
    // console.log(configShowOnly);

    if (configShowOnly === 0) {
        // oculta opciones dependiendo de la api
        if (!(tasaDataAPI.sim_libre_inversion)) {
            data = data.filter(e => e.id !== CreditoType.LIBRE_INVERSION);
        }

        if (!(tasaDataAPI.sim_vehiculo)) {
            data = data.filter(e => e.id !== CreditoType.VEHICULO);
        }

        if (!(tasaDataAPI.sim_vivienda)) {
            data = data.filter(e => e.id !== CreditoType.VIVIENDA);
        }
    } else {
        if (configShowOnly === 1) {
            return data.filter(e => e.id === CreditoType.LIBRE_INVERSION);
        }
        if (configShowOnly === 2) {
            return data.filter(e => e.id === CreditoType.VIVIENDA);
        }
        if (configShowOnly === 3) {
            return data.filter(e => e.id === CreditoType.VEHICULO);
        }
    }



    return data;
}
const getConfigShowOnly = () => {
    try {
        let idInputConfig: any = document.getElementById(config.ID_INPUT_CONFIG);

        if (idInputConfig) {
            return parseInt(idInputConfig.value);
        } else {
            return 0;
        }
    } catch (error) {
        return 0;
    }

}