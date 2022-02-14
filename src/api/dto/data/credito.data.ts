export enum CreditoType {
    LIBRE_INVERSION = "LIBRE_INVERSION",
    VIVIENDA = "VIVIENDA",
    VEHICULO = "VEHICULO",
    PLAN_CREDITO = "Plan de crédito",
    VEHICULO1 = "VEHICULO1",
    VEHICULO2 = "VEHICULO2",
    VEHICULO3 = "VEHICULO3",
}
export enum CreditoIdConfig {
    LIBRE_INVERSION = 1,
    VIVIENDA = 2,
    VEHICULO = 3,
}
export enum Antiguedad {
    DE_12_36_MESES = "12 - 36 meses",
    DE_37_120_MESES = "37 - 120 meses",
    MAS_120_MESES = "Más de 120 meses"
}
export interface CreditoData {
    id: CreditoType;
    tasa?: number;
    antiguedad: string;
    helpText: string;
    nombre: string;
    montoMax: number
    plazos: number[];
    antiguedades?: Antiguedad[]
}

export const creditoData: CreditoData[] = [
    {
        id: CreditoType.LIBRE_INVERSION,
        tasa: 1.6,
        nombre: "Libre Inversíon (especial)",
        antiguedad: "",
        helpText: "",
        montoMax: 5269451,
        plazos: [18, 24],
    },
    {
        id: CreditoType.VIVIENDA,
        tasa: 1.3,
        nombre: "Vivienda",
        antiguedad: "",
        helpText: "Antiguedad minima de 12 meses",
        montoMax: 181705200,
        plazos: [84, 96, 108, 120],
    },
    {
        id: CreditoType.VEHICULO,
        tasa: 1.3,
        nombre: "Vehiculo",
        antiguedad: "12 - 36 meses",
        helpText: "",
        montoMax: 45426300,
        plazos: [12, 24, 36, 48, 60],
        antiguedades: [Antiguedad.DE_12_36_MESES, Antiguedad.DE_37_120_MESES, Antiguedad.MAS_120_MESES]

    },
    {
        id: CreditoType.PLAN_CREDITO,
        tasa: 1.3,
        nombre: "Plan de Credito",
        antiguedad: "",
        helpText: "",
        montoMax: 45426300,
        plazos: [12, 24, 36, 48, 60],
        // antiguedades: [Antiguedad.DE_12_36_MESES, Antiguedad.DE_37_120_MESES, Antiguedad.MAS_120_MESES]
    },
]