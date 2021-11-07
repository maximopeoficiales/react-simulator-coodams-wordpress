export const getValorCuotaMensual = (prestamo: number, periodo: number, tasa: number) => {
    // let tasaMensual = (tasa / 100);
    // let total = prestamo * (tasaMensual / (1 - Math.pow((1 + tasaMensual), -periodo)));
    console.log(prestamo, periodo, tasa);

    let total = (prestamo * tasa) / (100 * (1 - Math.pow((1 + (tasa / 100)), (periodo * -1))));

    // let vlrTotalInts = (total * periodo) - prestamo;


    return total;
}


export const getValorInteresMensual = (prestamo: number, periodo: number, tasa: number) => {
    console.log(prestamo, periodo, tasa);
    let total = (prestamo * tasa) / (100 * (1 - Math.pow((1 + (tasa / 100)), (periodo * -1))));
    let vlrTotalInts = (total * periodo) - prestamo;
    return vlrTotalInts;
}
