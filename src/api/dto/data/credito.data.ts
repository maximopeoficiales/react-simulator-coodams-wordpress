export enum CreditoType {
    LIBRE_INVERSION = "LIBRE_INVERSION",
    VIVIENDA = "VIVIENDA",
    VEHICULO = "VEHICULO",
}
export interface CreditoData {
    id: CreditoType;
    type: string;
}
export const creditoData: CreditoData[] = [
    { id: CreditoType.LIBRE_INVERSION, type: "Libre Inversíon (especial)" },
    { id: CreditoType.VIVIENDA, type: "Vivienda" },
    { id: CreditoType.VEHICULO, type: "Vehículo" },
]