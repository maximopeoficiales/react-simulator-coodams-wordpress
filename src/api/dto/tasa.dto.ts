export interface TasaData {
    tasa_libre_inversion?: number;
    tasa_vivienda?: number;
    tasa_vehiculo_1?: number;
    tasa_vehiculo_2?: number;
    tasa_vehiculo_3?: number;
    sim_libre_inversion?: string;
    sim_vehiculo?: string;
    sim_vivienda?: string;

    //  Montos maximos
    monto_max_libre_inversion: number;
    monto_max_vivienda: number;
    monto_max_vehiculo: number;
}