export enum CreditoType {
    LIBRE_INVERSION = "LIBRE_INVERSION",
    VIVIENDA = "VIVIENDA",
    VEHICULO = "VEHICULO",
    VEHICULO1 = "VEHICULO1",
    VEHICULO2 = "VEHICULO2",
    VEHICULO3 = "VEHICULO3",
}
export interface CreditoData {
    id: CreditoType;
    tasa?: number;
    antiguedad: string;
    helpText: string;
    nombre: string;
    montoMax: number
    plazos: number[];
    variantes?: CreditoData[]
}

export const creditoData: CreditoData[] = [
    {
        id: CreditoType.LIBRE_INVERSION,
        nombre: "Libre Inversíon (especial)",
        antiguedad: "",
        helpText: "",
        montoMax: 5269451,
        plazos: [18, 24],
    },
    {
        id: CreditoType.VIVIENDA,
        nombre: "Vivienda",
        antiguedad: "",
        helpText: "Antiguedad minima de 12 meses",
        montoMax: 181705200,
        plazos: [84, 96, 108, 120],
    },
    {
        id: CreditoType.VEHICULO,
        nombre: "Vehiculo",
        antiguedad: "12 - 36 meses",
        helpText: "",
        montoMax: 0,
        plazos: [],
        variantes: [
            {
                id: CreditoType.VEHICULO1,
                nombre: "Vehiculo1",
                antiguedad: "12 - 36 meses",
                helpText: "",
                montoMax: 45426300,
                plazos: [12, 24, 36, 48, 60]
            },
            {
                id: CreditoType.VEHICULO2,
                nombre: "Vehiculo2",
                antiguedad: "37 - 120 meses",
                helpText: "",
                montoMax: 45426300,
                plazos: [12, 24, 36, 48, 60]
            },
            {
                id: CreditoType.VEHICULO2,
                nombre: "Vehiculo2",
                antiguedad: "Más de 120 meses",
                helpText: "",
                montoMax: 45426300,
                plazos: [12, 24, 36, 48, 60]
            },
        ]
    },
]