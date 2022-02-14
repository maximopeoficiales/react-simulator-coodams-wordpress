export interface TasaData {
    tasa_libre_inversion?: number;
    tasa_vivienda?: number;
    tasa_vehiculo_1?: number;
    tasa_vehiculo_2?: number;
    tasa_vehiculo_3?: number;
    tasa_plan_credito?: number;
    
    sim_libre_inversion: boolean;
    sim_vehiculo: boolean;
    sim_vivienda: boolean;
    sim_plan_credito: boolean;

    //  Montos maximos
    monto_max_libre_inversion: number;
    monto_max_vivienda: number;
    monto_max_vehiculo: number;
    monto_max_plan_credito: number;
}